from __future__ import annotations

import sys
from pathlib import Path

from pypdf import PdfReader


def walk(reader: PdfReader, items: list[object], depth: int = 0) -> list[str]:
    lines: list[str] = []
    for item in items:
        if isinstance(item, list):
            lines.extend(walk(reader, item, depth + 1))
            continue
        title = getattr(item, "title", None)
        if title:
            try:
                page = reader.get_destination_page_number(item) + 1
            except Exception:
                page = -1
            lines.append(f"{'  ' * depth}{page:03d}\t{title}")
    return lines


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: list_pdf_outline.py INPUT.pdf OUTPUT.txt")
    source = Path(sys.argv[1])
    target = Path(sys.argv[2])
    reader = PdfReader(source)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text("\n".join(walk(reader, reader.outline)), encoding="utf-8")
    print(f"Wrote outline for {len(reader.pages)} pages to {target}")


if __name__ == "__main__":
    main()
