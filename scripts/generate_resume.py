from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, Image as RLImage

OUTPUT = "public/Magesh-Kumar-Resume.pdf"

navy = HexColor("#121826")
green = HexColor("#7AAF1B")
grey = HexColor("#4B5563")
light = HexColor("#D1D5DB")

doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    leftMargin=15 * mm,
    rightMargin=15 * mm,
    topMargin=12 * mm,
    bottomMargin=11 * mm,
    title="S. Magesh Kumar - Resume",
    author="S. Magesh Kumar",
)

styles = getSampleStyleSheet()
name = ParagraphStyle("Name", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=23, leading=25, textColor=navy, spaceAfter=2)
role = ParagraphStyle("Role", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=green, spaceAfter=4)
contact = ParagraphStyle("Contact", parent=styles["Normal"], fontSize=8.2, leading=11, textColor=grey)
heading = ParagraphStyle("Heading", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=10, leading=12, textColor=navy, spaceBefore=7, spaceAfter=4, borderColor=green, borderWidth=0, borderPadding=0)
body = ParagraphStyle("Body", parent=styles["Normal"], fontSize=8.6, leading=12, textColor=grey, spaceAfter=3, alignment=TA_LEFT)
small = ParagraphStyle("Small", parent=body, fontSize=8, leading=10.5)
title = ParagraphStyle("ItemTitle", parent=body, fontName="Helvetica-Bold", fontSize=9.1, leading=11, textColor=navy, spaceAfter=1)
date = ParagraphStyle("Date", parent=body, fontName="Helvetica-Bold", fontSize=7.8, leading=10, textColor=green, alignment=TA_LEFT)

def section(text):
    return [Paragraph(text.upper(), heading), Table([[""]], colWidths=[180*mm], rowHeights=[0.5], style=TableStyle([("BACKGROUND", (0,0), (-1,-1), green), ("BOTTOMPADDING", (0,0), (-1,-1), 0), ("TOPPADDING", (0,0), (-1,-1), 0)])), Spacer(1, 3)]

def bullets(items):
    return [Paragraph("<bullet>&bull;</bullet> " + item, small) for item in items]

profile = RLImage("public/magesh-profile.jpeg", width=25*mm, height=32*mm)
identity = [
    Paragraph("S. MAGESH KUMAR", name),
    Paragraph("ASPIRING SOFTWARE DEVELOPER | CLOUD COMPUTING ENTHUSIAST", role),
    Paragraph("Chennai, Tamil Nadu &nbsp;&nbsp;|&nbsp;&nbsp; mageshsiva1305@gmail.com<br/>github.com/magesh13052008-coder", contact),
]
story = [
    Table([[identity, profile]], colWidths=[151*mm, 29*mm], style=TableStyle([
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
        ("ALIGN", (1,0), (1,0), "RIGHT"),
        ("LEFTPADDING", (0,0), (-1,-1), 0),
        ("RIGHTPADDING", (0,0), (-1,-1), 0),
        ("TOPPADDING", (0,0), (-1,-1), 0),
        ("BOTTOMPADDING", (0,0), (-1,-1), 3),
    ])),
    Spacer(1, 3),
]

story += section("Professional Summary")
story += [Paragraph(
    "Aspiring software developer and cloud computing professional pursuing B.E. Computer Science and Engineering. A smart and quick learner who understands new technical concepts easily and applies them through practical projects. Interested in creating reliable, user-friendly software while continuously improving programming, problem-solving and cloud skills.", body
)]

story += section("Education")
story += [Table([
    [Paragraph("B.E. Computer Science and Engineering", title), Paragraph("2025 - 2029", date)],
    [Paragraph("Meenakshi Sundararajan Engineering College, Chennai", body), ""],
    [Paragraph("Higher Secondary (Class XII) - Tamil Nadu State Board", title), Paragraph("2025 | 60%", date)],
    [Paragraph("Secondary School (Class X) - Tamil Nadu State Board", title), Paragraph("2023 | 62%", date)],
], colWidths=[145*mm, 35*mm], style=TableStyle([
    ("VALIGN", (0,0), (-1,-1), "TOP"), ("ALIGN", (1,0), (1,-1), "RIGHT"),
    ("TOPPADDING", (0,0), (-1,-1), 2), ("BOTTOMPADDING", (0,0), (-1,-1), 2),
]))]

story += section("Technical Skills")
skills = [
    ["Programming", "Java, Python, C, Data Structures and Algorithms"],
    ["Web", "HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind CSS"],
    ["Backend & Cloud", "Supabase, PostgreSQL, Authentication, Vercel, REST APIs"],
    ["Tools", "Git, GitHub, VS Code, Lovable, Figma, AI productivity tools"],
]
story += [Table([[Paragraph(f"<b>{a}</b>", small), Paragraph(b, small)] for a,b in skills], colWidths=[38*mm, 142*mm], style=TableStyle([
    ("VALIGN", (0,0), (-1,-1), "TOP"), ("GRID", (0,0), (-1,-1), 0.35, light),
    ("BACKGROUND", (0,0), (0,-1), HexColor("#F3F4F6")),
    ("LEFTPADDING", (0,0), (-1,-1), 6), ("RIGHTPADDING", (0,0), (-1,-1), 6),
    ("TOPPADDING", (0,0), (-1,-1), 4), ("BOTTOMPADDING", (0,0), (-1,-1), 4),
]))]

story += section("Selected Projects")
projects = [
    ("Her Guardian - Personal Safety Platform", "React, Supabase, Maps API", [
        "Built an SOS-focused safety experience with emergency contacts, GPS tracking and journey sharing.",
        "Designed a silent safe-word trigger, alert status flow and multilingual user experience.",
    ]),
    ("Campus Buddy - Student Productivity Platform", "Next.js, TypeScript, Cloud", [
        "Created an all-in-one student hub for resume building, coding practice, placements, CGPA and attendance.",
        "Included ATS resume guidance, interview preparation, challenges and skill tracking.",
    ]),
]
for project_name, tech, points in projects:
    story.append(KeepTogether([
        Table([[Paragraph(project_name, title), Paragraph(tech, date)]], colWidths=[125*mm, 55*mm], style=TableStyle([("ALIGN", (1,0), (1,0), "RIGHT"), ("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 0), ("TOPPADDING", (0,0), (-1,-1), 1), ("BOTTOMPADDING", (0,0), (-1,-1), 1)])),
        *bullets(points), Spacer(1, 2)
    ]))

story += section("Core Strengths & Activities")
story += bullets([
    "Smart and quick learner with the ability to understand technical concepts easily.",
    "Strong communication, problem-solving, teamwork, adaptable thinking and self-motivation.",
    "Badminton player and gym/fitness enthusiast, demonstrating discipline, consistency and an active lifestyle.",
    "Languages: Tamil and English; comfortable working in multilingual environments.",
])

doc.build(story)
print(OUTPUT)
