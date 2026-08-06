from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

ROOT = Path(r"D:\Website Development Next.js\portfolio")
OUT = ROOT / "output" / "pdf" / "mahedi-hasan-cv.pdf"
PHOTO = ROOT / "tmp" / "pdf-photo-3.png"
OUT.parent.mkdir(parents=True, exist_ok=True)
W, H = A4
SIDE = 174
NAVY = colors.HexColor("#0B1F33")
BLUE = colors.HexColor("#1677B7")
INK = colors.HexColor("#162536")
MUTED = colors.HexColor("#526476")
LINE = colors.HexColor("#D8E2EA")
WHITE = colors.white

def para(c, text, x, top, width, style):
    p = Paragraph(text, style)
    _, height = p.wrap(width, H)
    p.drawOn(c, x, top - height)
    return top - height

body = ParagraphStyle("body", fontName="Helvetica", fontSize=8.9, leading=12.2, textColor=MUTED)
small = ParagraphStyle("small", fontName="Helvetica", fontSize=7.5, leading=9.8, textColor=WHITE)
small_muted = ParagraphStyle("smallmuted", fontName="Helvetica", fontSize=7.2, leading=9.5, textColor=colors.HexColor("#C8D6E2"))
job = ParagraphStyle("job", fontName="Helvetica-Bold", fontSize=11.5, leading=14, textColor=INK)

c = canvas.Canvas(str(OUT), pagesize=A4)
c.setTitle("Mahedi Hasan - CV")
c.setAuthor("Mahedi Hasan")
c.setFillColor(WHITE)
c.rect(0, 0, W, H, fill=1, stroke=0)
c.setFillColor(NAVY)
c.rect(0, 0, SIDE, H, fill=1, stroke=0)
c.setFillColor(BLUE)
c.rect(SIDE, H - 9, W - SIDE, 9, fill=1, stroke=0)
c.setFillColor(colors.HexColor("#DDEAF2"))
c.roundRect(34, H - 155, 106, 122, 10, fill=1, stroke=0)
c.drawImage(str(PHOTO), 39, H - 148, width=96, height=112, preserveAspectRatio=True, anchor="c", mask="auto")

c.setFillColor(WHITE)
c.setFont("Helvetica-Bold", 22)
c.drawString(25, H - 178, "MAHEDI")
c.setFont("Helvetica", 21)
c.drawString(25, H - 204, "HASAN")
c.setFillColor(colors.HexColor("#8ED1F1"))
c.setFont("Helvetica-Bold", 8.5)
c.drawString(25, H - 224, "SEO & DIGITAL MARKETING")

def side_heading(title, y):
    c.setFillColor(BLUE)
    c.roundRect(22, y - 17, 130, 17, 4, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(31, y - 12, title.upper())
    return y - 29

def side_para(text, y, style=small):
    return para(c, text, 25, y, 130, style) - 8

y = side_heading("Contact", H - 254)
y = side_para("<b>+880 1636-407711</b><br/>Call / WhatsApp<br/>Dhaka, Bangladesh", y)
y = side_heading("Core skills", y - 8)
for skill in ["Technical SEO", "On-page SEO", "Keyword research", "Content strategy", "Meta and Google Ads", "WordPress and Shopify", "Next.js and Laravel"]:
    c.setFillColor(colors.HexColor("#8ED1F1"))
    c.circle(29, y - 4, 2, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica", 8.2)
    c.drawString(38, y - 7, skill)
    y -= 17
y = side_heading("Languages", y - 8)
y = side_para("Bengali - Native<br/>English - Fluent, written and spoken", y)
y = side_heading("Online", y - 7)
for label, url in [("LinkedIn", "linkedin.com/in/mahedi-hasan003/"), ("Instagram", "instagram.com/*.mahedi*"), ("Facebook", "facebook.com/mahedihasan.perves/"), ("X", "x.com/mahedi_perves"), ("GitHub", "github.com/mahedi03")]:
    y = side_para(f"<font color='#8ED1F1'><b>{label}</b></font><br/>{url}", y, small_muted)

main_x = SIDE + 30
main_w = W - main_x - 31
y = H - 48
c.setFillColor(INK)
c.setFont("Helvetica-Bold", 25)
c.drawString(main_x, y, "MAHEDI HASAN")
y -= 20
c.setFillColor(BLUE)
c.setFont("Helvetica-Bold", 10.5)
c.drawString(main_x, y, "SEO & DIGITAL MARKETING SPECIALIST")
y -= 15
c.setFillColor(MUTED)
c.setFont("Helvetica", 8.2)
c.drawString(main_x, y, "SEO  |  Paid Advertising  |  Content  |  Web Development")
y -= 24

def section(title, y):
    c.setFillColor(BLUE)
    c.roundRect(main_x, y - 18, 4, 18, 2, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 11.5)
    c.drawString(main_x + 11, y - 13, title.upper())
    c.setStrokeColor(LINE)
    c.setLineWidth(0.6)
    c.line(main_x + 11 + stringWidth(title.upper(), "Helvetica-Bold", 11.5) + 8, y - 9, main_x + main_w, y - 9)
    return y - 29

y = section("Professional profile", y)
y = para(c, "SEO and digital marketing specialist with hands-on experience across technical SEO, on-page optimization, content strategy, and paid advertising. Currently pursuing a BSc in Electrical and Electronic Engineering at American International University Bangladesh while working on live SEO and growth projects for agency clients and DTC brands across e-commerce, local service, and content-heavy websites. Comfortable across WordPress, Shopify, Next.js, and Laravel, with a focus on measurable organic growth.", main_x, y, main_w, body) - 18
y = section("Professional experience", y)
y = para(c, "<b>SEO &amp; Digital Marketing</b> <font color='#1677B7'>| Worked with rihawebtech.com</font>", main_x, y, main_w, job) - 5
y = para(c, "- Planned and executed SEO strategies for agency client projects, including keyword research, on-page optimization, and technical audits.<br/>- Built service and pillar pages covering Meta Ads, TikTok Ads, Local SEO, Creative Content, and Social Media Management using pillar and sub-pillar content architecture.<br/>- Supported paid advertising work across Meta, Google, TikTok, Pinterest, and LinkedIn for client accounts.<br/>- Handled web development tasks in WordPress, Shopify, Next.js, and Laravel alongside SEO delivery.<br/>- Tracked organic performance using Google Search Console and Google Analytics to guide ongoing optimization.", main_x, y, main_w, body) - 12
y = para(c, "<b>WordPress Developer &amp; SEO Expert</b> <font color='#1677B7'>| webtech.com.bd</font>", main_x, y, main_w, job) - 5
y = para(c, "- Built and maintained WordPress websites, handling both functionality and user experience.<br/>- Carried out on-page and technical SEO work to support organic search performance for client sites.", main_x, y, main_w, body) - 17
y = section("Education", y)
y = para(c, "<b>BSc in Electrical and Electronic Engineering (EEE)</b><br/>American International University Bangladesh (AIUB)<br/><font color='#526476'>Currently in 6th semester</font>", main_x, y, main_w, body) - 18
y = section("Professional focus", y)
for title, desc in [("SEO and organic growth", "Technical audits, on-page optimization, keyword research, topical authority mapping, content strategy, link building, and schema markup."), ("Paid advertising", "Meta Ads, Google Ads, TikTok Ads, Pinterest Ads, and LinkedIn Ads for client campaigns."), ("Web development", "WordPress, Shopify, Next.js, and Laravel work with attention to functionality, usability, and performance."), ("Analytics", "Google Search Console and Google Analytics used to track organic performance and guide optimization.")]:
    c.setFillColor(BLUE)
    c.circle(main_x + 3, y - 5, 2.3, fill=1, stroke=0)
    y = para(c, f"<b>{title}</b><br/>{desc}", main_x + 13, y, main_w - 13, body) - 9

c.setStrokeColor(LINE)
c.setLineWidth(0.5)
c.line(main_x, 27, W - 30, 27)
c.setFillColor(MUTED)
c.setFont("Helvetica", 7.2)
c.drawString(main_x, 15, "Mahedi Hasan  |  SEO Expert and Web Developer")
c.drawRightString(W - 30, 15, "mahedi-hasan-cv.pdf")
c.save()
print(OUT)
