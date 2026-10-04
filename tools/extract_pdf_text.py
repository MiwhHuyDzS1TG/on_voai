from __future__ import annotations

import logging
import sys
from pathlib import Path

from pypdf import PdfReader


def main() -> None:
    if len(sys.argv) not in {3, 5}:
        raise SystemExit(
            "Usage: extract_pdf_text.py INPUT.pdf OUTPUT.txt [START_PAGE END_PAGE]"
        )

    source = Path(sys.argv[1])
    target = Path(sys.argv[2])
    logging.getLogger("pypdf").setLevel(logging.ERROR)
    reader = PdfReader(source)
    target.parent.mkdir(parents=True, exist_ok=True)

    start = int(sys.argv[3]) if len(sys.argv) == 5 else 1
    end = int(sys.argv[4]) if len(sys.argv) == 5 else len(reader.pages)
    if start < 1 or end > len(reader.pages) or start > end:
        raise SystemExit(f"Invalid page range {start}-{end}")

    chunks = [
        f"SOURCE: {source.name}\nPAGES: {len(reader.pages)}\nRANGE: {start}-{end}\n"
    ]
    for index in range(start, end + 1):
        page = reader.pages[index - 1]
        chunks.append(f"\n===== PAGE {index} =====\n")
        chunks.append(page.extract_text() or "[NO EXTRACTABLE TEXT]")

    target.write_text("\n".join(chunks), encoding="utf-8")
    print(f"Extracted pages {start}-{end} to {target}")


if __name__ == "__main__":
    main()
