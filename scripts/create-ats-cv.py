from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, HRFlowable
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.lib import colors


OUTPUT = "public/cv/mahedi-hasan-cv-ats.pdf"


def register_font():
    candidates = [
        (r"C:\Windows\Fonts\arial.ttf", r"C:\Windows\Fonts\arialbd.ttf"),
        (r"C:\Windows\Fonts\segoeui.ttf", r"C:\Windows\Fonts\segoeuib.ttf"),
    ]
    for regular_path, bold_path in candidates:
        try:
            pdfmetrics.registerFont(TTFont("CVSans", regular_path))
            pdfmetrics.registerFont(TTFont("CVSans-Bold", bold_path))
            return "CVSans", "CVSans-Bold"
        except Exception:
            continue
    return "Helvetica", "Helvetica-Bold"


FONT, FONT_BOLD = register_font()


styles = getSampleStyleSheet()
name_style = ParagraphStyle(
    "Name", parent=styles["Normal"], fontName=FONT_BOLD, fontSize=19,
    leading=22, alignment=TA_CENTER, textColor=colors.black, spaceAfter=3,
)
contact_style = ParagraphStyle(
    "Contact", parent=styles["Normal"], fontName=FONT, fontSize=8.2,
    leading=10.5, alignment=TA_CENTER, textColor=colors.black, spaceAfter=7,
)
section_style = ParagraphStyle(
    "Section", parent=styles["Heading2"], fontName=FONT_BOLD, fontSize=10.5,
    leading=12.5, textColor=colors.black, spaceBefore=6, spaceAfter=4,
)
body_style = ParagraphStyle(
    "Body", parent=styles["Normal"], fontName=FONT, fontSize=8.3,
    leading=10.4, textColor=colors.black, spaceAfter=2,
)
job_style = ParagraphStyle(
    "Job", parent=body_style, fontName=FONT_BOLD, fontSize=9,
    leading=11, spaceBefore=4, spaceAfter=1,
)
sub_style = ParagraphStyle(
    "Sub", parent=body_style, fontSize=8.2, leading=10.2, spaceAfter=1,
)
bullet_style = ParagraphStyle(
    "Bullet", parent=body_style, leftIndent=10, firstLineIndent=-7,
    bulletIndent=0, spaceAfter=1,
)


def p(text, style=body_style):
    return Paragraph(text, style)


def bullet(text):
    return Paragraph("- " + text, bullet_style)


story = []
story.append(p("MAHEDI HASAN", name_style))
story.append(p(
    "Founder, FrameCipher | Digital Marketing Strategist | Technical SEO Specialist | Media Buyer | Web Developer<br/>"
    "Dhaka, Bangladesh | +880 1636-407711 | pervesmahedi@gmail.com<br/>"
    "LinkedIn: linkedin.com/in/mahedi-hasan003 | Portfolio: mahedi.framecipher.info | Agency: framecipher.info",
    contact_style,
))
story.append(HRFlowable(width="100%", thickness=0.6, color=colors.black, spaceAfter=5))

story.append(p("PROFESSIONAL SUMMARY", section_style))
story.append(p(
    "Digital Marketing Strategist, Technical SEO Consultant, and Full-Stack Web Developer with 4+ years of hands-on experience and 50+ completed projects. Founder of FrameCipher and Co-Founder of Riha Web Tech. Experienced in SEO, semantic search, AEO/GEO, paid acquisition, conversion tracking, and web development. Built campaigns and web platforms with sub-2-second load times, 95+ Google Lighthouse scores, and 3.5x to 5.2x ROAS results.",
))

story.append(p("CORE COMPETENCIES", section_style))
for line in [
    "SEO: Technical SEO audits, on-page SEO, off-page SEO, semantic SEO, topical maps, content clusters, entity optimization, schema markup, local SEO, Google Business Profile optimization, AEO/GEO.",
    "Performance Marketing: Google Ads, Performance Max, Display, YouTube, Meta Ads, Facebook, Instagram, Advantage+, TikTok Ads, Pinterest Ads, LinkedIn Ads, retargeting, creative strategy, ROAS optimization.",
    "Web Development: Next.js, React, TypeScript, Tailwind CSS, WordPress, custom themes, Elementor, Shopify, PHP, HTML5, CSS3, REST APIs, Git, GitHub, Core Web Vitals optimization.",
    "Analytics and CRO: Meta Conversions API, Google Analytics 4, Google Tag Manager, Google Search Console, Semrush, Ahrefs, conversion rate optimization, first-party attribution.",
]:
    story.append(bullet(line))

story.append(p("PROFESSIONAL EXPERIENCE", section_style))
story.append(p("FrameCipher - Dhaka, Bangladesh", job_style))
story.append(p("Founder and Principal Digital Growth Architect | January 2026 - Present", sub_style))
for line in [
    "Founded and operate a digital growth agency and software development company serving startups, small and medium-sized businesses, and enterprise brands.",
    "Lead work across software engineering, UX/UI, semantic search optimization, SEO, and performance marketing.",
    "Build scalable platforms with Next.js, WordPress, and Shopify while targeting sub-2-second load times and 95+ Google Lighthouse scores.",
    "Deploy full-funnel Meta Ads and Google Ads campaigns with server-side Meta Conversions API tracking.",
    "Implement AEO/GEO strategies to improve how client content and brand entities are discovered and cited by AI search systems.",
]:
    story.append(bullet(line))

story.append(p("Riha Web Tech - Mirpur, Dhaka, Bangladesh", job_style))
story.append(p("Co-Founder and Head of Growth Marketing | May 2025 - July 2026", sub_style))
for line in [
    "Directed performance marketing and organic search campaigns across 50+ client projects, contributing to more than BDT 15 Lakh in attributed commercial revenue.",
    "Executed semantic SEO strategies using the Koray Tugberk Gubur Framework and built topical authority maps that grew organic search impressions to more than 2 million per month.",
    "Managed Google Ads, Meta Ads, TikTok Ads, and Pinterest Ads campaigns producing 3.5x to 5.2x ROAS results.",
    "Built topical authority clusters, pillar pages, and conversion-focused service landing pages for competitive global markets.",
    "Engineered WordPress and Next.js platforms with lead attribution pipelines and CRM integrations.",
]:
    story.append(bullet(line))

story.append(p("WebTech - Website Design and Development - Dhaka, Bangladesh", job_style))
story.append(p("Search Engine Optimization Specialist and WordPress Developer | December 2024 - November 2025", sub_style))
for line in [
    "Led technical and on-page SEO audits, resolving crawl errors, canonical mismatches, and indexation issues for corporate clients.",
    "Built and maintained high-performance WordPress websites focused on user experience, responsive design, and conversion optimization.",
    "Coordinated with design and engineering teams to connect content marketing, search visibility, and clean code deployment.",
]:
    story.append(bullet(line))

story.append(p("EDUCATION", section_style))
story.append(p("Bachelor of Science in Electrical and Electronic Engineering, American International University-Bangladesh (AIUB) | 2024 - Present", body_style))
story.append(p("Higher Secondary Certificate, Science, Adamjee Cantonment College, Dhaka | February 2021 - August 2023", body_style))
story.append(p("Secondary School Certificate, Science, Adamjee Cantonment Public School, Dhaka | January 2016 - May 2020", body_style))

story.append(p("CERTIFICATIONS", section_style))
for line in [
    "Digital Marketing Certified - Full-Funnel Acquisition, Strategy, and Attribution",
    "SEO Certified - Technical SEO, Semantic Search, and Topical Authority",
    "Social Media and Performance Advertising Certified - Meta, Google, and TikTok Ads",
]:
    story.append(bullet(line))


doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=letter,
    rightMargin=0.62 * inch,
    leftMargin=0.62 * inch,
    topMargin=0.4 * inch,
    bottomMargin=0.4 * inch,
    title="Mahedi Hasan ATS Resume",
    author="Mahedi Hasan",
)
doc.build(story)
print(OUTPUT)
