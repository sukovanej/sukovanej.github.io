from __future__ import annotations

from copy import copy
from datetime import date, datetime
from pathlib import Path

import frontmatter
from marko import Markdown, html_renderer
from pydantic import BaseModel

ParsedLinks = list[str]


class ParsedFile(BaseModel):
    content: str
    title: str
    tags: list[str] | None = None
    created_at: datetime | date | None = None
    file_name: Path
    render_header: bool = True


class ParsedHtml(ParsedFile):
    html: str

    @classmethod
    def from_parsed_file(cls, parsed_file: ParsedFile, html: str) -> ParsedHtml:
        return ParsedHtml(html=html, **parsed_file.dict())


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


def parse_markdown(file_name: Path) -> tuple[ParsedHtml, ParsedLinks]:
    text = open(file_name).read()
    post = frontmatter.loads(text)
    parsed_file = ParsedFile(file_name=file_name, **post.to_dict())
    markdown, parsed_links = create_markdown()
    html = markdown.convert(parsed_file.content)
    return ParsedHtml.from_parsed_file(parsed_file, html), parsed_links
