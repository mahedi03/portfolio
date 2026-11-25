# pyright: reportMissingImports=false, reportMissingTypeStubs=false

import shutil
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUTPUT_PRIMARY = "public/cv/mahedi-hasan-cv.pdf"
OUTPUT_ATS = "public/cv/mahedi-hasan-cv-ats.pdf"

NAVY = colors.HexColor("#0F172A")
ACCENT = colors.HexColor("#1D4ED8")
BODY = colors.HexColor("#1E293B")
MUTED = colors.HexColor("#475569")
RULE = colors.HexColor("#CBD5E1")


def register_fonts():
    candidates = [
        (
            r"C:\Windows\Fonts\calibri.ttf",
            r"C:\Windows\Fonts\calibrib.ttf",
            r"C:\Windows\Fonts\calibrii.ttf",
        ),
        (
            r"C:\Windows\Fonts\segoeui.ttf",
            r"C:\Windows\Fonts\segoeuib.ttf",
            r"C:\Windows\Fonts\segoeuii.ttf",
        ),
        (
            r"C:\Windows\Fonts\arial.ttf",
            r"C:\Windows\Fonts\arialbd.ttf",
            r"C:\Windows\Fonts\ariali.ttf",
        ),
    ]
    for reg, bold, italic in candidates:
        try:
            pdfmetrics.registerFont(TTFont("CVFont", reg))
            pdfmetrics.registerFont(TTFont("CVFont-Bold", bold))
            pdfmetrics.registerFont(TTFont("CVFont-Italic", italic))
            pdfmetrics.registerFontFamily(
                "CVFont",
                normal="CVFont",
                bold="CVFont-Bold",
                italic="CVFont-Italic",
                boldItalic="CVFont-Bold",
            )
            return "CVFont", "CVFont-Bold", "CVFont-Italic"
        except Exception:
            continue
    return "Helvetica", "Helvetica-Bold", "Helvetica-Oblique"


FONT, FONT_BOLD, FONT_ITALIC = register_fonts()

PAGE_W, PAGE_H = letter
MARGIN_X = 0.54 * inch
MARGIN_Y = 0.36 * inch
CONTENT_W = PAGE_W - 2 * MARGIN_X

base = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name",
    parent=base["Normal"],
    fontName=FONT_BOLD,
    fontSize=20,
    leading=23,
    alignment=TA_CENTER,
    textColor=NAVY,
    spaceAfter=2,
)

headline_style = ParagraphStyle(
    "Headline",
    parent=base["Normal"],
    fontName=FONT_BOLD,
    fontSize=9.3,
    leading=12,
    alignment=TA_CENTER,
    textColor=ACCENT,
    spaceAfter=3,
)

contact_style = ParagraphStyle(
    "Contact",
    parent=base["Normal"],
    fontName=FONT,
    fontSize=8.5,
    leading=11.5,
    alignment=TA_CENTER,
    textColor=MUTED,
    spaceAfter=5,
)

section_style = ParagraphStyle(
    "Section",
    parent=base["Normal"],
    fontName=FONT_BOLD,
    fontSize=9.8,
    leading=12,
    textColor=NAVY,
    spaceBefore=5.5,
    spaceAfter=1.5,
)

body_style = ParagraphStyle(
    "Body",
    parent=base["Normal"],
    fontName=FONT,
    fontSize=8.8,
    leading=11.6,
    alignment=TA_JUSTIFY,
    textColor=BODY,
    spaceAfter=2,
)

body_left_style = ParagraphStyle(
    "BodyLeft",
    parent=body_style,
    alignment=TA_LEFT,
    spaceAfter=0,
)

bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    alignment=TA_JUSTIFY,
    leftIndent=13,
    firstLineIndent=0,
    bulletIndent=3,
    bulletFontName=FONT_BOLD,
    bulletFontSize=8.8,
    spaceAfter=1.6,
)

job_company_style = ParagraphStyle(
    "JobCompany",
    parent=body_left_style,
    fontName=FONT_BOLD,
    fontSize=9.5,
    leading=12,
    textColor=NAVY,
    spaceAfter=0,
)

job_role_style = ParagraphStyle(
    "JobRole",
    parent=body_left_style,
    fontName=FONT_ITALIC,
    fontSize=8.7,
    leading=11,
    textColor=MUTED,
    spaceAfter=0,
)

right_meta_style = ParagraphStyle(
    "RightMeta",
    parent=body_left_style,
    fontName=FONT_BOLD,
    fontSize=8.7,
    leading=12,
    alignment=TA_RIGHT,
    textColor=NAVY,
    spaceAfter=0,
)

right_sub_style = ParagraphStyle(
    "RightSub",
    parent=body_left_style,
    fontName=FONT,
    fontSize=8.5,
    leading=11,
    alignment=TA_RIGHT,
    textColor=MUTED,
    spaceAfter=0,
)

skill_label_style = ParagraphStyle(
    "SkillLabel",
    parent=body_left_style,
    fontName=FONT_BOLD,
    fontSize=8.7,
    leading=11.4,
    textColor=NAVY,
    spaceAfter=0,
)

skill_val_style = ParagraphStyle(
    "SkillVal",
    parent=body_style,
    fontName=FONT,
    fontSize=8.7,
    leading=11.4,
    textColor=BODY,
    spaceAfter=0,
)


def add_section(story, title):
    story.append(Paragraph(title.upper(), section_style))
    story.append(HRFlowable(width="100%", thickness=0.7, color=RULE, spaceAfter=4))


def add_bullet(story, text):
    story.append(Paragraph(f"<bullet>&bull;</bullet>{text}", bullet_style))


def add_job(story, company, role, location, dates, bullets):
    header_table = Table(
        [
            [
                Paragraph(company, job_company_style),
                Paragraph(dates, right_meta_style),
            ],
            [
                Paragraph(role, job_role_style),
                Paragraph(location, right_sub_style),
            ],
        ],
        colWidths=[CONTENT_W * 0.70, CONTENT_W * 0.30],
    )
    header_table.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, 0), 0.5),
                ("BOTTOMPADDING", (0, 1), (-1, 1), 3),
                ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
            ]
        )
    )
    story.append(header_table)
    for item in bullets:
        add_bullet(story, item)
    story.append(Spacer(1, 4))


def add_edu_row(story, degree, school, dates):
    tbl = Table(
        [
            [
                Paragraph(f"<b>{degree}</b>, {school}", body_left_style),
                Paragraph(dates, right_sub_style),
            ]
        ],
        colWidths=[CONTENT_W * 0.76, CONTENT_W * 0.24],
    )
    tbl.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5),
                ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
            ]
        )
    )
    story.append(tbl)


story = []

# Header
story.append(Paragraph("MAHEDI HASAN", name_style))
story.append(
    Paragraph(
        "Growth Strategist  &bull;  Technical SEO Consultant  &bull;  Full-Stack Web Developer",
        headline_style,
    )
)
story.append(
    Paragraph(
        'Dhaka, Bangladesh  &bull;  +880 1636-407711  &bull;  '
        '<a href="mailto:pervesmahedi@gmail.com" color="#1D4ED8">pervesmahedi@gmail.com</a><br/>'
        '<a href="https://www.linkedin.com/in/mahedi-hasan003/" color="#1D4ED8">linkedin.com/in/mahedi-hasan003</a>'
        '  &bull;  '
        '<a href="https://mahedi.framecipher.info" color="#1D4ED8">mahedi.framecipher.info</a>'
        '  &bull;  '
        '<a href="https://framecipher.info" color="#1D4ED8">framecipher.info</a>',
        contact_style,
    )
)
story.append(HRFlowable(width="100%", thickness=1.2, color=NAVY, spaceAfter=4))

# Professional Summary
add_section(story, "Professional Summary")
story.append(
    Paragraph(
        "Growth Strategist, Technical SEO Consultant, and Full-Stack Web Developer with 4+ years of hands-on experience delivering 50+ projects and generating BDT 15 Lakh+ in attributed client revenue. Founder of FrameCipher and former Co-Founder of Riha Web Tech. Specialized in semantic SEO, AI search optimization (AEO/GEO), full-funnel paid acquisition, server-side conversion tracking, and high-speed Next.js web platforms achieving 95+ Lighthouse scores and 3.5x to 5.2x ROAS.",
        body_style,
    )
)

# Core Competencies (clean 2-column table)
add_section(story, "Core Competencies")
skills_rows = [
    (
        "SEO & AI Search",
        "Technical SEO audits, on-page & off-page SEO, Semantic SEO, topical maps, entity optimization, schema markup, Local SEO, Google Business Profile, AEO & GEO.",
    ),
    (
        "Paid Advertising",
        "Google Ads (Search, Shopping, PMax, YouTube), Meta Ads (Facebook, Instagram, Advantage+), TikTok Ads, Pinterest Ads, LinkedIn Ads, retargeting, ROAS optimization.",
    ),
    (
        "Web Engineering",
        "Next.js, React, TypeScript, Tailwind CSS, WordPress, custom themes, Shopify, PHP, HTML5, CSS3, REST APIs, Git/GitHub, Core Web Vitals optimization.",
    ),
    (
        "Analytics & CRO",
        "Meta Conversions API (CAPI), Google Analytics 4 (GA4), Google Tag Manager, Google Search Console, Semrush, Ahrefs, conversion rate optimization, attribution.",
    ),
]
skills_table = Table(
    [
        [Paragraph(label, skill_label_style), Paragraph(val, skill_val_style)]
        for label, val in skills_rows
    ],
    colWidths=[1.18 * inch, CONTENT_W - 1.18 * inch],
)
skills_table.setStyle(
    TableStyle(
        [
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (0, -1), 8),
            ("RIGHTPADDING", (1, 0), (1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 1.5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ]
    )
)
story.append(skills_table)

# Professional Experience
add_section(story, "Professional Experience")

add_job(
    story,
    "FrameCipher",
    "Founder & Principal Web Architect",
    "Dhaka, Bangladesh",
    "2021 - Present",
    [
        "Founded and lead a digital growth and software engineering studio serving startups, SMEs, and international brands across the US, UK, UAE, and Bangladesh.",
        "Architect scalable Next.js, WordPress, and Shopify platforms achieving sub-2-second load times and 95+ Google Lighthouse performance scores.",
        "Deploy full-funnel Meta Ads and Google Ads campaigns wired with server-side Meta Conversions API (CAPI) and GA4 event deduplication.",
        "Implement Semantic SEO and AEO/GEO frameworks so client sites rank cleanly on Google Search and earn citations across AI answer engines.",
    ],
)

add_job(
    story,
    "Riha Web Tech",
    "Co-Founder & Head of Growth Marketing",
    "Mirpur, Dhaka, Bangladesh",
    "2022 - July 2025",
    [
        "Directed organic search and paid acquisition across 50+ client projects, contributing to more than BDT 15 Lakh in attributed commercial revenue.",
        "Executed Semantic SEO roadmaps using the Koray Tugberk Gubur framework, scaling client organic search impressions past 2 million per month.",
        "Managed cross-channel Google Ads, Meta Ads, TikTok Ads, and Pinterest Ads campaigns consistently delivering 3.5x to 5.2x ROAS.",
        "Engineered conversion-focused WordPress and Next.js landing architectures integrated with CRM pipelines and first-party lead attribution.",
    ],
)

add_job(
    story,
    "WebTech - Website Design & Development",
    "SEO Specialist & WordPress Developer",
    "Dhaka, Bangladesh",
    "Dec 2024 - Nov 2025",
    [
        "Led technical and on-page SEO audits, resolving crawl bottlenecks, canonical conflicts, and indexation issues for corporate client sites.",
        "Built and optimized responsive WordPress websites focused on clean UX, Core Web Vitals speed, and lead conversion.",
        "Partnered with design and engineering teams to align content architecture, search visibility, and clean production deployments.",
    ],
)

# Education
add_section(story, "Education")
add_edu_row(
    story,
    "B.Sc. in Electrical and Electronic Engineering",
    "American International University-Bangladesh (AIUB)",
    "2024 - Present",
)
add_edu_row(
    story,
    "Higher Secondary Certificate (Science)",
    "Adamjee Cantonment College, Dhaka",
    "Feb 2021 - Aug 2023",
)
add_edu_row(
    story,
    "Secondary School Certificate (Science)",
    "Adamjee Cantonment Public School, Dhaka",
    "Jan 2016 - May 2020",
)

# Certifications
add_section(story, "Certifications")
for title, detail in [
    ("Digital Marketing Certified", "Full-Funnel Acquisition, Strategy, and Attribution"),
    ("SEO Certified", "Technical SEO, Semantic Search, and Topical Authority"),
    ("Performance Advertising Certified", "Meta Ads, Google Ads, and TikTok Ads"),
]:
    add_bullet(story, f"<b>{title}:</b> {detail}")

doc = SimpleDocTemplate(
    OUTPUT_PRIMARY,
    pagesize=letter,
    rightMargin=MARGIN_X,
    leftMargin=MARGIN_X,
    topMargin=MARGIN_Y,
    bottomMargin=MARGIN_Y,
    title="Mahedi Hasan - Resume",
    author="Mahedi Hasan",
)
doc.build(story)
shutil.copyfile(OUTPUT_PRIMARY, OUTPUT_ATS)
print("Generated:", OUTPUT_PRIMARY, "and", OUTPUT_ATS)
