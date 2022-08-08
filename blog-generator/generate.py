from __future__ import annotations

import shutil
from copy import copy
from datetime import date, datetime
from pathlib import Path

import frontmatter
from marko import Markdown, html_renderer
from pydantic import BaseModel

base_path = Path("../")
index_path = Path("blog/index.md")

output_path = Path("../docs")

template_path = Path("default_template")
main_template_path = template_path / "main_template.html"
header_template_path = template_path / "header_template.html"
tag_template_path = template_path / "tag_template.html"

main_template = open(main_template_path).read()
header_template = open(header_template_path).read()
tag_template = open(tag_template_path).read()


ParsedLinks = list[str]


def create_renderer(parsed_links: ParsedLinks) -> type[html_renderer.HTMLRenderer]:
    class LinkRendererMixin(html_renderer.HTMLRenderer):
        def render_link(self, element):
            parsed_links.append(element.dest)

            new_element = copy(element)
            new_element.dest = f"{new_element.dest}.html"
            return super().render_link(new_element)

    return LinkRendererMixin


def create_markdown() -> tuple[Markdown, list[str]]:
    parsed_links: ParsedLinks = []

    renderer = create_renderer(parsed_links)

    class LinkExtension:
        renderer_mixins = [renderer]

    return (Markdown(extensions=[LinkExtension]), parsed_links)


class ParsedFile(BaseModel):
    content: str
    title: str
    tags: list[str] | None = None
    created_at: datetime | date | None = None
    file_name: Path


class ParsedHtml(ParsedFile):
    html: str

    @classmethod
    def from_parsed_file(cls, parsed_file: ParsedFile, html: str) -> ParsedHtml:
        return ParsedHtml(html=html, **parsed_file.dict())


def parse_markdown(file_name: Path) -> tuple[ParsedHtml, ParsedLinks]:
    text = open(file_name).read()
    post = frontmatter.loads(text)
    parsed_file = ParsedFile(file_name=file_name, **post.to_dict())
    markdown, parsed_links = create_markdown()
    html = markdown.convert(parsed_file.content)
    return ParsedHtml.from_parsed_file(parsed_file, html), parsed_links


def get_linkable_files(parsed_links: ParsedLinks) -> ParsedLinks:
    linkable_files = []

    for parsed_link in parsed_links:
        parsed_path = Path(parsed_link)

        if parsed_link.startswith("https://"):
            print(f"Skipping {parsed_path}")
            continue

        absolute_parsed_path = base_path / parsed_path.with_suffix(".md")

        if not absolute_parsed_path.exists():
            raise Exception(f"file {absolute_parsed_path} doesn't exist")

        linkable_files.append(parsed_path.with_suffix(".md"))

    return linkable_files


def generate_html_pages(index_path: Path, base_path: Path) -> dict[Path, str]:
    remaining_file_names = [index_path]
    parsed_file_names: dict[Path, str] = {}

    while remaining_file_names:
        remaining_file_name = remaining_file_names.pop()
        parsed_html, parsed_links = parse_markdown(base_path / remaining_file_name)
        linkable_files = get_linkable_files(parsed_links)

        for linkable_file in linkable_files:
            parsed_path = Path(linkable_file)

            if parsed_path not in remaining_file_names:
                remaining_file_names.append(parsed_path)

        parsed_file_names[remaining_file_name] = _generate_html(parsed_html)

    return parsed_file_names


def _generate_html(parsed_html: ParsedHtml) -> str:
    tag_html_list = [tag_template.format(tag=tag) for tag in parsed_html.tags or []]
    header_html = header_template.format(
        tags="".join(tag_html_list), created_at=parsed_html.created_at
    )

    content = parsed_html.html

    if parsed_html.file_name != base_path / index_path:
        content = f"{header_html}{content}"

    main_html = main_template.format(content=content, title=parsed_html.title)
    return main_html


def save_output(file_name: Path, html: str) -> None:
    html_file_name = file_name.with_suffix(".html")
    new_file = output_path / html_file_name
    new_file.parent.mkdir(exist_ok=True, parents=True)
    new_file.write_text(html)


def main():
    html_pages = generate_html_pages(index_path, base_path)

    for file_name, html in html_pages.items():
        save_output(file_name, html)

    # copy index file
    shutil.copyfile(
        output_path / index_path.with_suffix(".html"), output_path / "index.html"
    )

    # copy static from template to output
    shutil.copytree(
        template_path / "static", output_path / "static", dirs_exist_ok=True
    )


if __name__ == "__main__":
    main()
