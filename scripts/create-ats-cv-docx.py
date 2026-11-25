# pyright: reportMissingImports=false, reportMissingTypeStubs=false

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor

OUTPUT = "public/cv/mahedi-hasan-cv.docx"
FONT = "Calibri"
NAVY = "0F172A"
ACCENT = "1D4ED8"
BODY = "1E293B"
MUTED = "475569"
RULE = "CBD5E1"


def set_run_font(run, size=9.5, bold=False, italic=False, color=BODY):
    run.font.name = FONT
    rpr = run._element.get_or_add_rPr()
    rpr.rFonts.set(qn("w:ascii"), FONT)
    rpr.rFonts.set(qn("w:hAnsi"), FONT)
    run.font.size = Pt(size)
    run.bold = bold
    run.italic = italic
    run.font.color.rgb = RGBColor.from_string(color)


def set_bottom_border(paragraph, color=RULE, size="6"):
    p = paragraph._p
    pPr = p.get_or_add_pPr()
    borders = pPr.find(qn("w:pBdr"))
    if borders is None:
        borders = OxmlElement("w:pBdr")
        pPr.append(borders)
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), size)
    bottom.set(qn("w:space"), "3")
    bottom.set(qn("w:color"), color)
    borders.append(bottom)


def set_spacing(paragraph, before=0, after=2.5, line=1.12):
    fmt = paragraph.paragraph_format
    fmt.space_before = Pt(before)
    fmt.space_after = Pt(after)
    fmt.line_spacing = line


def add_text(paragraph, text, size=9.5, bold=False, italic=False, color=BODY):
    run = paragraph.add_run(text)
    set_run_font(run, size=size, bold=bold, italic=italic, color=color)
    return run


def add_section(doc, title):
    paragraph = doc.add_paragraph()
    set_spacing(paragraph, before=9, after=4, line=1.05)
    add_text(paragraph, title.upper(), size=10.5, bold=True, color=NAVY)
    set_bottom_border(paragraph, color=RULE, size="6")
    return paragraph


def add_bullet(doc, text, bold_prefix=None):
    paragraph = doc.add_paragraph(style="List Bullet")
    paragraph.paragraph_format.left_indent = Inches(0.22)
    paragraph.paragraph_format.first_line_indent = Inches(-0.12)
    set_spacing(paragraph, after=2, line=1.1)
    if bold_prefix:
        add_text(paragraph, bold_prefix, size=9.3, bold=True, color=NAVY)
    add_text(paragraph, text, size=9.3, color=BODY)
    return paragraph


def add_job(doc, company, role, location, dates, bullets):
    p1 = doc.add_paragraph()
    set_spacing(p1, before=5, after=0.5, line=1.08)
    add_text(p1, company, size=10, bold=True, color=NAVY)
    add_text(p1, f"  |  {location}  |  {dates}", size=9.2, color=MUTED)

    p2 = doc.add_paragraph()
    set_spacing(p2, before=0, after=2.5, line=1.08)
    add_text(p2, role, size=9.4, italic=True, color=MUTED)

    for item in bullets:
        add_bullet(doc, item)


doc = Document()
section = doc.sections[0]
section.top_margin = Inches(0.48)
section.bottom_margin = Inches(0.48)
section.left_margin = Inches(0.6)
section.right_margin = Inches(0.6)

normal = doc.styles["Normal"]
normal.font.name = FONT
normal._element.rPr.rFonts.set(qn("w:ascii"), FONT)
normal._element.rPr.rFonts.set(qn("w:hAnsi"), FONT)
normal.font.size = Pt(9.3)

# Header
title = doc.add_paragraph()
title.alignment = WD_ALIGN_PARAGRAPH.CENTER
set_spacing(title, after=2, line=1.0)
add_text(title, "MAHEDI HASAN", size=20, bold=True, color=NAVY)

subtitle = doc.add_paragraph()
subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER
set_spacing(subtitle, after=3, line=1.05)
add_text(
    subtitle,
    "Growth Strategist  •  Technical SEO Consultant  •  Full-Stack Web Developer",
    size=9.8,
    bold=True,
    color=ACCENT,
)

contact = doc.add_paragraph()
contact.alignment = WD_ALIGN_PARAGRAPH.CENTER
set_spacing(contact, after=6, line=1.1)
add_text(contact, "Dhaka, Bangladesh  •  +880 1636-407711  •  pervesmahedi@gmail.com\n", size=9, color=MUTED)
add_text(
    contact,
    "linkedin.com/in/mahedi-hasan003  •  mahedi.framecipher.info  •  framecipher.info",
    size=9,
    color=ACCENT,
)
set_bottom_border(contact, color=NAVY, size="10")

# Summary
add_section(doc, "Professional Summary")
p = doc.add_paragraph()
set_spacing(p, after=3, line=1.12)
add_text(
    p,
    "Growth Strategist, Technical SEO Consultant, and Full-Stack Web Developer with 4+ years of hands-on experience delivering 50+ projects and generating BDT 15 Lakh+ in attributed client revenue. Founder of FrameCipher and former Co-Founder of Riha Web Tech. Specialized in semantic SEO, AI search optimization (AEO/GEO), full-funnel paid acquisition, server-side conversion tracking, and high-speed Next.js web platforms achieving 95+ Lighthouse scores and 3.5x to 5.2x ROAS.",
    size=9.3,
)

# Core Competencies
add_section(doc, "Core Competencies")
for label, desc in [
    ("SEO & AI Search: ", "Technical SEO audits, on-page & off-page SEO, Semantic SEO, topical maps, entity optimization, schema markup, Local SEO, Google Business Profile, AEO & GEO."),
    ("Paid Advertising: ", "Google Ads (Search, Shopping, PMax, YouTube), Meta Ads (Facebook, Instagram, Advantage+), TikTok Ads, Pinterest Ads, LinkedIn Ads, retargeting, ROAS optimization."),
    ("Web Engineering: ", "Next.js, React, TypeScript, Tailwind CSS, WordPress, custom themes, Shopify, PHP, HTML5, CSS3, REST APIs, Git/GitHub, Core Web Vitals optimization."),
    ("Analytics & CRO: ", "Meta Conversions API (CAPI), Google Analytics 4 (GA4), Google Tag Manager, Google Search Console, Semrush, Ahrefs, conversion rate optimization, attribution."),
]:
    add_bullet(doc, desc, bold_prefix=label)

# Professional Experience
add_section(doc, "Professional Experience")
add_job(
    doc,
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
    doc,
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
    doc,
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
add_section(doc, "Education")
for degree, school, dates in [
    ("B.Sc. in Electrical and Electronic Engineering", "American International University-Bangladesh (AIUB)", "2024 - Present"),
    ("Higher Secondary Certificate (Science)", "Adamjee Cantonment College, Dhaka", "Feb 2021 - Aug 2023"),
    ("Secondary School Certificate (Science)", "Adamjee Cantonment Public School, Dhaka", "Jan 2016 - May 2020"),
]:
    p = doc.add_paragraph()
    set_spacing(p, after=2, line=1.08)
    add_text(p, degree, size=9.3, bold=True, color=NAVY)
    add_text(p, f", {school}  |  {dates}", size=9.2, color=MUTED)

# Certifications
add_section(doc, "Certifications")
for title_txt, detail in [
    ("Digital Marketing Certified: ", "Full-Funnel Acquisition, Strategy, and Attribution"),
    ("SEO Certified: ", "Technical SEO, Semantic Search, and Topical Authority"),
    ("Performance Advertising Certified: ", "Meta Ads, Google Ads, and TikTok Ads"),
]:
    add_bullet(doc, detail, bold_prefix=title_txt)

doc.core_properties.title = "Mahedi Hasan - Resume"
doc.core_properties.author = "Mahedi Hasan"
doc.save(OUTPUT)
print("Generated:", OUTPUT)
