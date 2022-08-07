from __future__ import annotations

import hashlib
import shutil
from datetime import date, datetime
from functools import reduce
from pathlib import Path

import frontmatter
from marko import Markdown, html_renderer, inline
from pydantic import BaseModel

base_path = Path("../")
files = ["blog/index.md", "blog/posts/2022-08-07.md"]
index_path = "blog/index.md"

output_path = Path("output")

template_path = Path("default_template")
main_template_path = template_path / "main_template.html"
header_template_path = template_path / "header_template.html"
tag_template_path = template_path / "tag_template.html"

main_template = open(main_template_path).read()
header_template = open(header_template_path).read()
tag_template = open(tag_template_path).read()


class LinkRendererMixin(html_renderer.HTMLRenderer):
    def render_link(self, element):
        template = '<a href="{}.html"{}>{}</a>'
        title = f' title="{self.escape_html(element.title)}"' if element.title else ""
        url = self.escape_url(element.dest)
        body = self.render_children(element)
        return template.format(url, title, body)


class Link(inline.Link):
    override = True


class LinkExtension:
    elements = [Link]
    renderer_mixins = [LinkRendererMixin]


markdown = Markdown(extensions=[LinkExtension])


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


def generate_html(file_name: Path):
    text = open(file_name).read()
    post = frontmatter.loads(text)
    parsed_file = ParsedFile(file_name=file_name, **post.to_dict())
    html = markdown.convert(parsed_file.content)
    parsed_html = ParsedHtml.from_parsed_file(parsed_file, html)
    return _generate_html(parsed_html)


def _generate_html(parsed_html: ParsedHtml) -> str:
    tag_html_list = [
        tag_template.format(tag=tag, tag_color=string_to_stable_color(tag))
        for tag in parsed_html.tags or []
    ]
    header_html = header_template.format(
        tags="".join(tag_html_list), created_at=parsed_html.created_at
    )

    content = parsed_html.html

    if parsed_html.file_name != base_path / index_path:
        content = f"{header_html}{content}"

    main_html = main_template.format(content=content, title=parsed_html.title)
    return main_html


def save_output(file_name: str, html: str) -> None:
    html_file_name = f"{file_name[:-3]}.html"
    new_file = output_path / html_file_name
    new_file.parent.mkdir(exist_ok=True, parents=True)
    new_file.write_text(html)


def string_to_stable_color(value: str) -> str:
    NUMBER_OF_COLORS = 16**6

    hash_bytes = list(hashlib.sha256(bytes(value, "utf8")).digest())
    _reduce = lambda acc, x: ((acc[0] + x) * acc[1], acc[1] + 1)
    number = reduce(_reduce, hash_bytes, [1, 0])[0]
    color = "#" + hex(number % NUMBER_OF_COLORS)[2:].zfill(6)

    return color


def main():
    for file_name in files:
        html = generate_html(base_path / file_name)
        save_output(file_name, html)

    # copy index file
    shutil.copyfile(f"output/{index_path[:-3]}.html", output_path / "index.html")

    # copy static from template to output
    shutil.copytree(template_path / "static", output_path / "static")


if __name__ == "__main__":
    main()
