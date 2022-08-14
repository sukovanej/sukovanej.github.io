from __future__ import annotations

from copy import copy
from datetime import date, datetime
from pathlib import Path
from typing import cast

import frontmatter
from marko import Markdown, html_renderer, inline
from marko.element import Element
from pydantic import BaseModel

ParsedLinks = list[str]


class ParsedFile(BaseModel):
    content: str
    title: str
    tags: list[str] | None = None
    created_at: datetime | date | None = None
    file_name: Path
    page_header: str
    render_header: bool = True
    enable_comments: bool = True


class ParsedHtml(ParsedFile):
    html: str

    @classmethod
    def from_parsed_file(cls, parsed_file: ParsedFile, html: str) -> ParsedHtml:
        return ParsedHtml(html=html, **parsed_file.dict())


def create_renderer(parsed_links: ParsedLinks) -> type[html_renderer.HTMLRenderer]:
    class LinkRendererMixin(html_renderer.HTMLRenderer):
        def render_link(self, element: inline.Link) -> str:
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


class WithoutParagraphRendererMixin(html_renderer.HTMLRenderer):
    def render_paragraph(self, element: Element) -> str:
        return cast(str, self.render_children(element))


class WithoutParagraphExtension:
    renderer_mixins = [WithoutParagraphRendererMixin]


def parse_markdown(file_name: Path) -> tuple[ParsedHtml, ParsedLinks]:
    text = file_name.read_text()

    post = frontmatter.loads(text)
    post_dict = post.to_dict()

    header_markdown = Markdown(extensions=[WithoutParagraphExtension])

    title = post_dict["title"]

    parsed_file = ParsedFile(file_name=file_name, page_header=title, **post.to_dict())
    parsed_file.page_header = header_markdown.convert(parsed_file.page_header)

    markdown, parsed_links = create_markdown()
    html = markdown.convert(parsed_file.content)

    return ParsedHtml.from_parsed_file(parsed_file, html), parsed_links
