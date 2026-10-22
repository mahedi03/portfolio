from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


OUTPUT = "public/cv/mahedi-hasan-cv.docx"
FONT = "Arial"
BLUE = "17365D"
GRAY = "666666"


def set_run_font(run, size=9.5, bold=False, italic=False, color="000000"):
    run.font.name = FONT
    run._element.get_or_add_rPr().rFonts.set(qn("w:ascii"), FONT)
    run._element.get_or_add_rPr().rFonts.set(qn("w:hAnsi"), FONT)
    run.font.size = Pt(size)
    run.bold = bold
    run.italic = italic
    run.font.color.rgb = RGBColor.from_string(color)


def set_cell_or_paragraph_border(paragraph, color="B7C9D6", size="6"):
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


def set_spacing(paragraph, before=0, after=2, line=1.0):
    fmt = paragraph.paragraph_format
    fmt.space_before = Pt(before)
    fmt.space_after = Pt(after)
    fmt.line_spacing = line


def add_text(paragraph, text, size=9.5, bold=False, italic=False, color="000000"):
    run = paragraph.add_run(text)
    set_run_font(run, size=size, bold=bold, italic=italic, color=color)
    return run


def add_section(doc, title):
    paragraph = doc.add_paragraph()
    paragraph.style = doc.styles["Heading 1"]
    set_spacing(paragraph, before=8, after=4)
    add_text(paragraph, title.upper(), size=11, bold=True, color=BLUE)
    set_cell_or_paragraph_border(paragraph)
    return paragraph


def add_bullet(doc, text, level=0):
    paragraph = doc.add_paragraph(style="List Bullet")
    paragraph.paragraph_format.left_indent = Inches(0.22 + level * 0.18)
    paragraph.paragraph_format.first_line_indent = Inches(-0.12)
    set_spacing(paragraph, after=2, line=1.0)
    add_text(paragraph, text, size=9.2)
    return paragraph


def add_job(doc, company, location, title, dates, bullets):
    paragraph = doc.add_paragraph()
    set_spacing(paragraph, before=5, after=1)
    add_text(paragraph, f"{company} | {location}", size=10, bold=True, color=BLUE)
    paragraph = doc.add_paragraph()
    set_spacing(paragraph, after=2)
    add_text(paragraph, title, size=9.5, italic=True, color=GRAY)
    add_text(paragraph, f" | {dates}", size=9.5, color=GRAY)
    for item in bullets:
        add_bullet(doc, item)


doc = Document()
section = doc.sections[0]
section.top_margin = Inches(0.55)
section.bottom_margin = Inches(0.55)
section.left_margin = Inches(0.68)
section.right_margin = Inches(0.68)

normal = doc.styles["Normal"]
normal.font.name = FONT
normal._element.rPr.rFonts.set(qn("w:ascii"), FONT)
normal._element.rPr.rFonts.set(qn("w:hAnsi"), FONT)
normal.font.size = Pt(9.2)

title = doc.add_paragraph()
title.style = doc.styles["Title"]
title.alignment = WD_ALIGN_PARAGRAPH.CENTER
set_spacing(title, after=2, line=1.0)
add_text(title, "MAHEDI HASAN", size=20, bold=True, color=BLUE)

subtitle = doc.add_paragraph()
subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER
set_spacing(subtitle, after=2, line=1.0)
add_text(subtitle, "Founder of FrameCipher | Digital Marketing Strategist | Technical SEO Specialist | Media Buyer | Web Developer", size=9.5, bold=True, color=BLUE)

contact = doc.add_paragraph()
contact.alignment = WD_ALIGN_PARAGRAPH.CENTER
set_spacing(contact, after=7, line=1.0)
add_text(contact, "Dhaka, Bangladesh | +880 1636-407711 | pervesmahedi@gmail.com\n", size=9, color=GRAY)
add_text(contact, "LinkedIn: linkedin.com/in/mahedi-hasan003 | Portfolio: mahedi.framecipher.info | Agency: framecipher.info", size=9, color=GRAY)
set_cell_or_paragraph_border(contact, color="9FBAD0", size="8")

add_section(doc, "Professional Summary")
p = doc.add_paragraph()
set_spacing(p, after=3, line=1.05)
add_text(p, "Digital Marketing Strategist, Technical SEO Consultant, and Full-Stack Web Developer with 4+ years of hands-on experience and 50+ completed projects. Founder of FrameCipher and Co-Founder of Riha Web Tech. Experienced in SEO, semantic search, AEO/GEO, paid acquisition, conversion tracking, and web development. Built campaigns and web platforms with sub-2-second load times, 95+ Google Lighthouse scores, and 3.5x to 5.2x ROAS results.")

add_section(doc, "Core Competencies")
for item in [
    "SEO: Technical SEO audits, on-page SEO, off-page SEO, semantic SEO, topical maps, content clusters, entity optimization, schema markup, local SEO, Google Business Profile optimization, AEO/GEO.",
    "Performance Marketing: Google Ads, Performance Max, Display, YouTube, Meta Ads, Facebook, Instagram, Advantage+, TikTok Ads, Pinterest Ads, LinkedIn Ads, retargeting, creative strategy, ROAS optimization.",
    "Web Development: Next.js, React, TypeScript, Tailwind CSS, WordPress, custom themes, Elementor, Shopify, PHP, HTML5, CSS3, REST APIs, Git, GitHub, Core Web Vitals optimization.",
    "Analytics and CRO: Meta Conversions API, Google Analytics 4, Google Tag Manager, Google Search Console, Semrush, Ahrefs, conversion rate optimization, first-party attribution.",
]:
    add_bullet(doc, item)

add_section(doc, "Professional Experience")
add_job(doc, "FrameCipher", "Dhaka, Bangladesh", "Founder and Principal Digital Growth Architect", "January 2026 - Present", [
    "Founded and operate a digital growth agency and software development company serving startups, small and medium-sized businesses, and enterprise brands.",
    "Lead work across software engineering, UX/UI, semantic search optimization, SEO, and performance marketing.",
    "Build scalable platforms with Next.js, WordPress, and Shopify while targeting sub-2-second load times and 95+ Google Lighthouse scores.",
    "Deploy full-funnel Meta Ads and Google Ads campaigns with server-side Meta Conversions API tracking.",
    "Implement AEO/GEO strategies to improve how client content and brand entities are discovered and cited by AI search systems.",
])
add_job(doc, "Riha Web Tech", "Mirpur, Dhaka, Bangladesh", "Co-Founder and Head of Growth Marketing", "May 2025 - July 2026", [
    "Directed performance marketing and organic search campaigns across 50+ client projects, contributing to more than BDT 15 Lakh in attributed commercial revenue.",
    "Executed semantic SEO strategies using the Koray Tugberk Gubur Framework and built topical authority maps that grew organic search impressions to more than 2 million per month.",
    "Managed Google Ads, Meta Ads, TikTok Ads, and Pinterest Ads campaigns producing 3.5x to 5.2x ROAS results.",
    "Built topical authority clusters, pillar pages, and conversion-focused service landing pages for competitive global markets.",
    "Engineered WordPress and Next.js platforms with lead attribution pipelines and CRM integrations.",
])
add_job(doc, "WebTech - Website Design and Development", "Dhaka, Bangladesh", "Search Engine Optimization Specialist and WordPress Developer", "December 2024 - November 2025", [
    "Led technical and on-page SEO audits, resolving crawl errors, canonical mismatches, and indexation issues for corporate clients.",
    "Built and maintained high-performance WordPress websites focused on user experience, responsive design, and conversion optimization.",
    "Coordinated with design and engineering teams to connect content marketing, search visibility, and clean code deployment.",
])

add_section(doc, "Education")
for item in [
    ("Bachelor of Science in Electrical and Electronic Engineering", "American International University-Bangladesh (AIUB)", "2024 - Present"),
    ("Higher Secondary Certificate, Science", "Adamjee Cantonment College, Dhaka", "February 2021 - August 2023"),
    ("Secondary School Certificate, Science", "Adamjee Cantonment Public School, Dhaka", "January 2016 - May 2020"),
]:
    p = doc.add_paragraph()
    set_spacing(p, after=2, line=1.0)
    add_text(p, item[0], size=9.3, bold=True)
    add_text(p, f" | {item[1]} | {item[2]}", size=9.3)

add_section(doc, "Certifications")
for item in [
    "Digital Marketing Certified - Full-Funnel Acquisition, Strategy, and Attribution",
    "SEO Certified - Technical SEO, Semantic Search, and Topical Authority",
    "Social Media and Performance Advertising Certified - Meta, Google, and TikTok Ads",
]:
    add_bullet(doc, item)

# Add a simple page number field in the footer without affecting ATS reading order.
footer = section.footer.paragraphs[0]
footer.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = footer.add_run("Mahedi Hasan | Resume | ")
set_run_font(run, size=8, color=GRAY)
field_begin = OxmlElement("w:fldChar")
field_begin.set(qn("w:fldCharType"), "begin")
instr = OxmlElement("w:instrText")
instr.set(qn("xml:space"), "preserve")
instr.text = "PAGE"
field_end = OxmlElement("w:fldChar")
field_end.set(qn("w:fldCharType"), "end")
run._r.append(field_begin)
run._r.append(instr)
run._r.append(field_end)

doc.core_properties.title = "Mahedi Hasan Resume"
doc.core_properties.author = "Mahedi Hasan"
doc.save(OUTPUT)
print(OUTPUT)
