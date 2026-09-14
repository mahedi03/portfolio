import os
from pathlib import Path
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    HRFlowable,
    ListFlowable,
    ListItem,
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY

ROOT = Path(r"D:\Website Development Next.js\portfolio")
OUT_PDF = ROOT / "public" / "cv" / "mahedi-hasan-cv.pdf"
OUT_PDF.parent.mkdir(parents=True, exist_ok=True)

def build_ats_cv():
    # Standard 0.5 inch margins for ATS compliance
    doc = SimpleDocTemplate(
        str(OUT_PDF),
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36,
        title="Mahedi Hasan - ATS Resume",
        author="Mahedi Hasan",
    )

    styles = getSampleStyleSheet()

    # Custom Clean ATS Typography Styles
    name_style = ParagraphStyle(
        "Name",
        fontName="Helvetica-Bold",
        fontSize=20,
        leading=24,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#111827"),
    )

    title_style = ParagraphStyle(
        "Title",
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=14,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#2563EB"),
    )

    contact_style = ParagraphStyle(
        "Contact",
        fontName="Helvetica",
        fontSize=8.5,
        leading=12,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#374151"),
    )

    section_heading = ParagraphStyle(
        "SectionHeading",
        fontName="Helvetica-Bold",
        fontSize=11,
        leading=15,
        alignment=TA_LEFT,
        textColor=colors.HexColor("#0F172A"),
        spaceAfter=3,
        spaceBefore=8,
    )

    job_title_style = ParagraphStyle(
        "JobTitle",
        fontName="Helvetica-Bold",
        fontSize=9.5,
        leading=13,
        alignment=TA_LEFT,
        textColor=colors.HexColor("#1E293B"),
    )

    company_style = ParagraphStyle(
        "CompanyDate",
        fontName="Helvetica",
        fontSize=8.5,
        leading=12,
        alignment=TA_LEFT,
        textColor=colors.HexColor("#475569"),
    )

    body_style = ParagraphStyle(
        "Body",
        fontName="Helvetica",
        fontSize=8.5,
        leading=11.8,
        alignment=TA_LEFT,
        textColor=colors.HexColor("#334155"),
    )

    bullet_style = ParagraphStyle(
        "Bullet",
        fontName="Helvetica",
        fontSize=8.5,
        leading=11.5,
        alignment=TA_LEFT,
        textColor=colors.HexColor("#334155"),
    )

    story = []

    # 1. HEADER: NAME & CONTACT INFORMATION
    story.append(Paragraph("MAHEDI HASAN", name_style))
    story.append(Spacer(1, 2))
    story.append(
        Paragraph(
            "Founder of FrameCipher | Marketing Strategist &amp; Consultant | SEO Specialist | Media Buyer &amp; Web Developer",
            title_style,
        )
    )
    story.append(Spacer(1, 4))
    story.append(
        Paragraph(
            "Matikata, Dhaka Cantonment, Dhaka - 1206, Bangladesh &nbsp;|&nbsp; +880 1636-407711 &nbsp;|&nbsp; pervesmahedi@gmail.com<br/>"
            "LinkedIn: linkedin.com/in/mahedi-hasan003 &nbsp;|&nbsp; Portfolio: mahedihasanperves.vercel.app &nbsp;|&nbsp; Agency: framecipher.info",
            contact_style,
        )
    )
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#CBD5E1"), spaceAfter=6))

    # 2. PROFESSIONAL SUMMARY
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor("#E2E8F0"), spaceAfter=5))
    summary_text = (
        "Multi-disciplinary Digital Marketing Strategist, Technical SEO Consultant, and Full-Stack Web Developer "
        "with over 4+ years of hands-on experience helping 50+ businesses scale sustainably. Founder of <b>FrameCipher</b> "
        "and Co-Founder of <b>Riha Web Tech</b>, responsible for generating <b>৳15 Lakh+ in verifiable commercial returns</b> across 50+ projects. "
        "Specializes in connecting full-funnel paid acquisition (Meta, Google, TikTok, Pinterest Ads) with algorithmic organic search "
        "(Semantic SEO, Koray Tuğberk GÜBÜR Framework, Topical Authority, AEO/GEO) and conversion-engineered web architecture "
        "(Next.js, WordPress, Shopify). Proven record of achieving sub-2s Core Web Vitals, 4.8x+ ROAS baselines, and scaling high-converting campaigns."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 6))

    # 3. CORE COMPETENCIES & TECHNICAL SKILLS
    story.append(Paragraph("CORE COMPETENCIES &amp; TECHNICAL SKILLS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor("#E2E8F0"), spaceAfter=5))
    skills_data = [
        ("<b>Search Engine Optimization (SEO &amp; GEO):</b>", "Technical SEO Audits, On-Page &amp; Off-Page SEO, Semantic SEO (Koray Tuğberk GÜBÜR Framework), Topical Maps, Content Clusters, Entity Optimization, Schema Markup (JSON-LD), Local SEO &amp; GMB Optimization, Answer Engine Optimization (AEO/GEO)."),
        ("<b>Performance Marketing &amp; Media Buying:</b>", "Google Ads (Search, Performance Max, Display, YouTube), Meta Ads (Facebook &amp; Instagram Advantage+), TikTok Ads, Pinterest Ads, LinkedIn Ads, Full-Funnel Retargeting, Creative Strategy, ROAS Optimization."),
        ("<b>Web &amp; Software Development:</b>", "Next.js (App Router, Server Components), React, TypeScript, Tailwind CSS, WordPress (Custom Themes &amp; Elementor), Shopify, PHP, HTML5, CSS3, REST APIs, Git/GitHub, Core Web Vitals Optimization."),
        ("<b>Data Analytics &amp; Conversion Infrastructure:</b>", "Server-Side Meta Conversions API (CAPI), Google Analytics 4 (GA4), Google Tag Manager (GTM), Google Search Console, Semrush, Ahrefs, Conversion Rate Optimization (CRO), First-Party Attribution."),
    ]
    for cat, items in skills_data:
        story.append(Paragraph(f"{cat} {items}", bullet_style))
        story.append(Spacer(1, 2))
    story.append(Spacer(1, 4))

    # 4. PROFESSIONAL EXPERIENCE
    story.append(Paragraph("WORK EXPERIENCE", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor("#E2E8F0"), spaceAfter=5))

    # Role 1: FrameCipher
    story.append(Paragraph("<b>FrameCipher</b> &nbsp;|&nbsp; Dhaka, Bangladesh", job_title_style))
    story.append(Paragraph("<i>Founder &amp; Principal Digital Growth Architect</i> &nbsp;|&nbsp; January 2026 – Present", company_style))
    story.append(Spacer(1, 2))
    role1_bullets = [
        "Established FrameCipher as a 360° growth agency and software development company providing end-to-end digital solutions for startups, SMEs, and enterprise brands.",
        "Lead multi-disciplinary teams across software engineering, UX/UI, semantic search optimization, and performance marketing campaigns.",
        "Engineer scalable web platforms using Next.js, WordPress, and Shopify, maintaining sub-2-second load times and 95+ Google Lighthouse scores.",
        "Deploy full-funnel paid media campaigns across Meta Ads and Google Ads integrated with server-side Conversion APIs (CAPI) for precise first-party tracking.",
        "Implement generative search optimization (AEO/GEO) ensuring client content and brand entities are indexed and cited by AI engines (Perplexity, ChatGPT, Claude).",
    ]
    for b in role1_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))
        story.append(Spacer(1, 1.5))
    story.append(Spacer(1, 4))

    # Role 2: Riha Web Tech
    story.append(Paragraph("<b>Riha Web Tech</b> &nbsp;|&nbsp; Mirpur - 14, Dhaka, Bangladesh", job_title_style))
    story.append(Paragraph("<i>Co-Founder &amp; Head of Growth Marketing</i> &nbsp;|&nbsp; May 2025 – July 2026", company_style))
    story.append(Spacer(1, 2))
    role2_bullets = [
        "Directed performance marketing and organic search campaigns delivering 50+ client projects with over ৳15 Lakh+ in attributed commercial revenue and a 99% client satisfaction rating.",
        "Executed Semantic SEO strategies utilizing the Koray Tuğberk GÜBÜR Framework, constructing topical authority maps that grew organic search impressions to over 2M+ monthly.",
        "Managed high-volume paid media across Google Ads, Meta Ads, TikTok Ads, and Pinterest Ads, delivering consistent 3.5x to 5.2x return on ad spend (ROAS).",
        "Constructed comprehensive topical authority clusters, pillar pages, and high-converting service landing pages across competitive global verticals.",
        "Engineered custom WordPress and Next.js digital platforms with automated lead attribution pipelines and CRM integrations.",
    ]
    for b in role2_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))
        story.append(Spacer(1, 1.5))
    story.append(Spacer(1, 4))

    # Role 3: WebTech
    story.append(Paragraph("<b>WebTech | Website Design and Development</b> &nbsp;|&nbsp; Dhaka, Bangladesh", job_title_style))
    story.append(Paragraph("<i>Search Engine Optimization Specialist &amp; WordPress Developer</i> &nbsp;|&nbsp; December 2024 – November 2025", company_style))
    story.append(Spacer(1, 2))
    role3_bullets = [
        "Spearheaded technical and on-page SEO audits, resolving crawl errors, canonical mismatches, and indexation bottlenecks for corporate clients.",
        "Built, customized, and maintained high-performance WordPress client portals focusing on user experience, responsive layout, and conversion rate optimization.",
        "Coordinated closely with in-house design and engineering teams to bridge content marketing, search discoverability, and clean code deployment.",
    ]
    for b in role3_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))
        story.append(Spacer(1, 1.5))
    story.append(Spacer(1, 6))

    # 5. EDUCATION
    story.append(Paragraph("EDUCATION", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor("#E2E8F0"), spaceAfter=5))
    edu_data = [
        ("<b>Bachelor of Science in Electrical and Electronic Engineering (BSc in EEE)</b>", "American International University-Bangladesh (AIUB)", "2024 – 2028 (Currently in progress)"),
        ("<b>Higher Secondary Certificate (HSC) – Science</b>", "Adamjee Cantonment College, Dhaka", "February 2021 – August 2023"),
        ("<b>Secondary School Certificate (SSC) – Science</b>", "Adamjee Cantonment Public School, Dhaka", "January 2016 – May 2020"),
    ]
    for degree, school, dates in edu_data:
        story.append(Paragraph(f"{degree} &nbsp;|&nbsp; {school} &nbsp;({dates})", bullet_style))
        story.append(Spacer(1, 2))
    story.append(Spacer(1, 4))

    # 6. CERTIFICATIONS
    story.append(Paragraph("CERTIFICATIONS &amp; CREDENTIALS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor("#E2E8F0"), spaceAfter=5))
    certs = (
        "• &nbsp; <b>Digital Marketing Certified</b> (Full-Funnel Acquisition, Strategy &amp; Attribution)<br/>"
        "• &nbsp; <b>SEO Certified</b> (Technical SEO, Semantic Search &amp; Topical Authority)<br/>"
        "• &nbsp; <b>Social Media &amp; Performance Advertising Certified</b> (Meta, Google, TikTok Ads)"
    )
    story.append(Paragraph(certs, bullet_style))

    doc.build(story)
    print("ATS CV generated successfully at:", OUT_PDF)

if __name__ == "__main__":
    build_ats_cv()
