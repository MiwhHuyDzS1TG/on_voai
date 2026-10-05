from __future__ import annotations

import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}


def node_text(node: ET.Element) -> str:
    parts: list[str] = []
    for item in node.iter():
        tag = item.tag.rsplit("}", 1)[-1]
        if tag == "t" and item.text:
            parts.append(item.text)
        elif tag == "tab":
            parts.append("\t")
        elif tag in {"br", "cr"}:
            parts.append("\n")
    return "".join(parts).strip()


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: extract_docx_text.py INPUT.docx OUTPUT.txt")

    source = Path(sys.argv[1])
    target = Path(sys.argv[2])
    with zipfile.ZipFile(source) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))
        body = root.find("w:body", NS)
        if body is None:
            raise SystemExit("DOCX has no document body")

        lines = [f"SOURCE: {source.name}"]
        paragraph_number = 0
        table_number = 0
        for child in body:
            kind = child.tag.rsplit("}", 1)[-1]
            if kind == "p":
                text = node_text(child)
                if text:
                    paragraph_number += 1
                    lines.append(f"\n[P{paragraph_number:04d}] {text}")
            elif kind == "tbl":
                table_number += 1
                lines.append(f"\n[TABLE {table_number}]")
                for row_number, row in enumerate(child.findall("w:tr", NS), start=1):
                    cells = [node_text(cell) for cell in row.findall("w:tc", NS)]
                    lines.append(f"[R{row_number:03d}] " + " | ".join(cells))

        media = sorted(name for name in archive.namelist() if name.startswith("word/media/"))
        lines.append(f"\n\nSUMMARY: {paragraph_number} paragraphs, {table_number} tables, {len(media)} media files")
        for name in media:
            info = archive.getinfo(name)
            lines.append(f"MEDIA: {name} ({info.file_size} bytes)")

    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text("\n".join(lines), encoding="utf-8")
    print(f"Extracted {paragraph_number} paragraphs, {table_number} tables and {len(media)} media files to {target}")


if __name__ == "__main__":
    main()
