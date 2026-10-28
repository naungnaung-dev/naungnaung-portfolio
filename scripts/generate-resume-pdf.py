#!/usr/bin/env python3
"""Generate the ATS-friendly resume PDF from src/data/resume.ts.

Setup: python3 -m pip install -r scripts/requirements-resume.txt
Run:   python3 scripts/generate-resume-pdf.py
"""

from __future__ import annotations

import html
import json
import subprocess
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Naung_Naung_Full_Stack_Developer_Resume.pdf"
NAVY = colors.HexColor("#0F2744")
BLUE = colors.HexColor("#165DAD")
TEXT = colors.HexColor("#243449")
MUTED = colors.HexColor("#536273")

# Resume Design Standard v1.0
PAGE_MARGIN = 18 * mm
FONT_NORMAL = "ResumeSans"
FONT_BOLD = "ResumeSans-Bold"
FONT_ITALIC = "ResumeSans-Italic"
FONT_BOLD_ITALIC = "ResumeSans-BoldItalic"

NAME_SIZE = 24
NAME_LEADING = 28
TITLE_SIZE = 14
TITLE_LEADING = 17.5
SECTION_SIZE = 12
SECTION_LEADING = 15
BODY_SIZE = 11
BODY_LEADING = 14.5
ROLE_SIZE = 11
ROLE_LEADING = 14.5
META_SIZE = 10
META_LEADING = 12.7
CONTACT_SIZE = 10
CONTACT_LEADING = 12.7

NAME_TO_TITLE_GAP = 3.5
TITLE_TO_CONTACT_GAP = 5.5
CONTACT_LINE_GAP = 2
HEADER_TO_SECTION_GAP = 4
SECTION_BEFORE = 14
SECTION_AFTER = 8
ENTRY_GAP = 7
ROLE_TO_META_GAP = 3.5
META_TO_BULLET_GAP = 5.5
BULLET_GAP = 3.5
BODY_AFTER = 4

FONT_CANDIDATES = [
    {
        "regular": Path("/System/Library/Fonts/Supplemental/Arial.ttf"),
        "bold": Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf"),
        "italic": Path("/System/Library/Fonts/Supplemental/Arial Italic.ttf"),
        "bold_italic": Path("/System/Library/Fonts/Supplemental/Arial Bold Italic.ttf"),
    },
    {
        "regular": Path("/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf"),
        "bold": Path("/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf"),
        "italic": Path("/usr/share/fonts/truetype/liberation2/LiberationSans-Italic.ttf"),
        "bold_italic": Path("/usr/share/fonts/truetype/liberation2/LiberationSans-BoldItalic.ttf"),
    },
]


def escape(value: str) -> str:
    normalized = value.replace("\u2011", "-").replace("\u2013", "-").replace("\u2014", "-")
    return html.escape(normalized, quote=True)


def load_resume() -> dict:
    result = subprocess.run(
        ["node", str(ROOT / "scripts" / "export-resume-data.mjs")],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(result.stdout)


def register_resume_fonts() -> None:
    font_files = next(
        (candidate for candidate in FONT_CANDIDATES if all(path.exists() for path in candidate.values())),
        None,
    )
    if font_files is None:
        raise FileNotFoundError("Arial or Liberation Sans font files are required to generate the resume")

    pdfmetrics.registerFont(TTFont(FONT_NORMAL, font_files["regular"]))
    pdfmetrics.registerFont(TTFont(FONT_BOLD, font_files["bold"]))
    pdfmetrics.registerFont(TTFont(FONT_ITALIC, font_files["italic"]))
    pdfmetrics.registerFont(TTFont(FONT_BOLD_ITALIC, font_files["bold_italic"]))
    pdfmetrics.registerFontFamily(
        FONT_NORMAL,
        normal=FONT_NORMAL,
        bold=FONT_BOLD,
        italic=FONT_ITALIC,
        boldItalic=FONT_BOLD_ITALIC,
    )


def build_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "ResumeName",
            parent=base["Title"],
            fontName=FONT_BOLD,
            fontSize=NAME_SIZE,
            leading=NAME_LEADING,
            textColor=NAVY,
            alignment=TA_CENTER,
            spaceAfter=NAME_TO_TITLE_GAP,
        ),
        "title": ParagraphStyle(
            "ResumeTitle",
            parent=base["Normal"],
            fontName=FONT_BOLD,
            fontSize=TITLE_SIZE,
            leading=TITLE_LEADING,
            textColor=BLUE,
            alignment=TA_CENTER,
            spaceAfter=TITLE_TO_CONTACT_GAP,
        ),
        "contact": ParagraphStyle(
            "ResumeContact",
            parent=base["Normal"],
            fontName=FONT_NORMAL,
            fontSize=CONTACT_SIZE,
            leading=CONTACT_LEADING,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=CONTACT_LINE_GAP,
        ),
        "section": ParagraphStyle(
            "ResumeSection",
            parent=base["Heading2"],
            fontName=FONT_BOLD,
            fontSize=SECTION_SIZE,
            leading=SECTION_LEADING,
            textColor=NAVY,
            spaceBefore=SECTION_BEFORE,
            spaceAfter=SECTION_AFTER,
            keepWithNext=True,
        ),
        "body": ParagraphStyle(
            "ResumeBody",
            parent=base["BodyText"],
            fontName=FONT_NORMAL,
            fontSize=BODY_SIZE,
            leading=BODY_LEADING,
            textColor=TEXT,
            spaceAfter=BODY_AFTER,
        ),
        "skill": ParagraphStyle(
            "ResumeSkill",
            parent=base["BodyText"],
            fontName=FONT_NORMAL,
            fontSize=BODY_SIZE,
            leading=BODY_LEADING,
            textColor=TEXT,
            spaceAfter=3,
        ),
        "role": ParagraphStyle(
            "ResumeRole",
            parent=base["Heading3"],
            fontName=FONT_BOLD,
            fontSize=ROLE_SIZE,
            leading=ROLE_LEADING,
            textColor=NAVY,
            spaceAfter=ROLE_TO_META_GAP,
            keepWithNext=True,
        ),
        "meta": ParagraphStyle(
            "ResumeMeta",
            parent=base["BodyText"],
            fontName=FONT_NORMAL,
            fontSize=META_SIZE,
            leading=META_LEADING,
            textColor=MUTED,
            spaceAfter=META_TO_BULLET_GAP,
            keepWithNext=True,
        ),
        "bullet": ParagraphStyle(
            "ResumeBullet",
            parent=base["BodyText"],
            fontName=FONT_NORMAL,
            fontSize=BODY_SIZE,
            leading=BODY_LEADING,
            textColor=TEXT,
            leftIndent=4.4 * mm,
            firstLineIndent=-2.8 * mm,
            spaceAfter=BULLET_GAP,
        ),
        "small": ParagraphStyle(
            "ResumeSmall",
            parent=base["BodyText"],
            fontName=FONT_NORMAL,
            fontSize=BODY_SIZE,
            leading=BODY_LEADING,
            textColor=TEXT,
            spaceAfter=BODY_AFTER,
        ),
    }


def bullet_list(items: list[str], styles: dict[str, ParagraphStyle]) -> list[Paragraph]:
    return [Paragraph(f"- {escape(item)}", styles["bullet"]) for item in items]


def experience_block(entry: dict, styles: dict[str, ParagraphStyle]):
    heading = escape(entry["role"])
    if entry.get("organization"):
        heading += f" | {escape(entry['organization'])}"

    details = [entry["period"]]
    if entry.get("location"):
        details.append(entry["location"])
    if entry.get("arrangement"):
        details.append(entry["arrangement"])

    return KeepTogether(
        [
            Paragraph(heading, styles["role"]),
            Paragraph(escape(" | ".join(details)), styles["meta"]),
            *bullet_list(entry["bullets"], styles),
        ]
    )


def generate() -> None:
    data = load_resume()
    register_resume_fonts()
    styles = build_styles()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=PAGE_MARGIN,
        leftMargin=PAGE_MARGIN,
        topMargin=PAGE_MARGIN,
        bottomMargin=PAGE_MARGIN,
        title=f"{data['header']['name']} - {data['header']['title']} Resume",
        author=data["header"]["name"],
        subject="Professional resume",
    )

    story = [
        Paragraph(escape(data["header"]["name"]), styles["name"]),
        Paragraph(escape(data["header"]["title"]), styles["title"]),
    ]

    email = data["header"]["email"]
    first_contact_line = (
        f"{escape(data['header']['location'])} | {escape(data['header']['nationality'])} | "
        f'<link href="mailto:{escape(email)}" color="#165DAD">{escape(email)}</link>'
    )
    story.append(Paragraph(first_contact_line, styles["contact"]))

    link_markup = []
    for link in data["header"]["links"]:
        link_markup.append(
            f'<link href="{escape(link["href"])}" color="#165DAD">'
            f'{escape(link["displayText"])}</link>'
        )
    story.extend(
        [
            Paragraph(" | ".join(link_markup), styles["contact"]),
            Spacer(1, HEADER_TO_SECTION_GAP),
            Paragraph("PROFESSIONAL SUMMARY", styles["section"]),
            Paragraph(escape(data["summary"]), styles["body"]),
            Paragraph("TECHNICAL SKILLS", styles["section"]),
        ]
    )

    for group in data["skills"]:
        skills_line = (
            f"<b>{escape(group['category'])}:</b> "
            f"{escape(', '.join(group['items']))}"
        )
        story.append(Paragraph(skills_line, styles["skill"]))

    story.append(Paragraph("PROFESSIONAL EXPERIENCE", styles["section"]))
    for index, entry in enumerate(data["experience"]):
        if index:
            story.append(Spacer(1, ENTRY_GAP))
        story.append(experience_block(entry, styles))

    additional_experience = [
        Paragraph("ADDITIONAL EXPERIENCE", styles["section"]),
    ]
    for entry in data["additionalExperience"]:
        label = escape(entry["role"])
        if entry.get("organization"):
            label += f" | {escape(entry['organization'])}"
        additional_experience.append(
            Paragraph(
                f'<b>{label}</b> | <font size="{META_SIZE}">{escape(entry["period"])}</font>',
                styles["small"],
            )
        )
    story.append(KeepTogether(additional_experience))

    project = data["featuredProject"]
    story.extend(
        [
            Paragraph("FEATURED PROJECT", styles["section"]),
            Paragraph(
                f"{escape(project['name'])} | {escape(project['role'])}",
                styles["role"],
            ),
            Paragraph(escape(project["period"]), styles["meta"]),
            Paragraph(escape(project["description"]), styles["body"]),
            *bullet_list(project["bullets"], styles),
            Paragraph(
                f"<b>Technologies:</b> {escape(', '.join(project['technologies']))}",
                styles["small"],
            ),
        ]
    )
    for link in project["links"]:
        story.append(
            Paragraph(
                f'<b>{escape(link["label"])}:</b> '
                f'<link href="{escape(link["href"])}" color="#165DAD">'
                f'{escape(link["displayText"])}</link>',
                styles["small"],
            )
        )

    academic = data["education"]
    education_block = [
        Paragraph("EDUCATION", styles["section"]),
        Paragraph(escape(academic["degree"]), styles["role"]),
        Paragraph(
            f"{escape(academic['university'])} | {escape(academic['period'])}",
            styles["meta"],
        ),
        Paragraph(f"<b>Field:</b> {escape(academic['field'])}", styles["small"]),
    ]
    for activity in academic["activities"]:
        education_block.append(Paragraph(escape(activity), styles["small"]))
    story.append(KeepTogether(education_block))

    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    generate()
