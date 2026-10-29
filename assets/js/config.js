/* ==========================================================
   CONFIG — all of your content lives here.
   • Empty href ("") means "not available yet": that link is simply not shown.
   • Text markup: **bold** and {italic accent word} work in headlines and bios.
   • Images: put files in assets/img/ and change the src values below.
   ========================================================== */
export const site = {
  name: "Yusuf Olaniyi",
  email: "yolaniyi@andrew.cmu.edu",
  location: "Rwanda",
  cv: "assets/cv/Yusuf Olaniyi - Oct'26.docx.pdf", // drop your PDF at this path

  // Header tabs. On the home page they scroll to the section with the same id.
  nav: [
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
    { id: "experience", label: "Experience" },
    { id: "updates", label: "Updates" },
  ],

  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yusuf-olaniyi/" },
    { label: "GitHub", href: "https://github.com/Yusuf-Olaniyi" },
  ],

  hero: {
    headline: "Structures should not {fail silently}",
    // aside: "",
    intro:
      "I'm exploring technology-driven approaches that transform structural and environmental data into real-time insights that help engineers assess structural health and make informed maintenance decisions.",
  },

  // Strip under the hero. Add logo: "assets/img/xyz.svg" to show a logo instead of the name.
  affiliations: [
    { name: "Carnegie Mellon University", logo: "assets/img/cmu_logo.svg" },
    { name: "University of Lagos", logo: "assets/img/unilag_logo.svg" },
    { name: "ML Collective", logo: "assets/img/mlc_logo.svg" },
    { name: "Ignite Hub Africa", logo: "assets/img/ignite_n_logo.png" },
  ],

  about: {
    headline: "Researcher. Engineer. {Innovator.}",
    bio: [
      "I'm an MSc student in Engineering Artificial Intelligence at **Carnegie Mellon University**, trained as a civil engineer. My research focuses on preventing structural failures through intelligent monitoring, developing practical AI systems that help engineers detect damage and assess infrastructure safety, particularly in resource-constrained settings.",
      "I lead **AfriCrack**, a 1,000 pixel-level annotated images of cracks in Nigerian buildings. The work received an Honorary Mention at Deep Learning Indaba 2024 and was named Runner-up in the IndabaX Nigeria 2024 Poster Presentation. Beyond research, I coordinate **Ignite Hub Africa**, supporting young Africans pursuing research, and mentor students as they navigate their academic and professional journeys."
    ],
    portrait: { src: "assets/img/yusuf_olaniyi_profile.jpg", alt: "Yusuf Olaniyi" }, // set to null to hide
    panelTitle: "Questions I'm working on",
    // Three questions that frame the whole site.
    questions: [
      "How can image and sensor data be combined to estimate damage severity reliably when labeled data is scarce and field conditions differ from benchmarks?",
      "How should a digital twin update its picture of a structure over time under changing loads and environments, and how confident should it be?",
      "How can that uncertainty be turned into repair and maintenance decisions that engineers can act on?",
    ],
  },

  // The closed loop drawn in About. Order matters: it runs clockwise from the top.
  loop: [
    { label: "Sense", text: "Cameras, IoT sensors and non-destructive tests observe the structure." },
    { label: "Assess", text: "Segmentation and ML models measure damage and estimate severity." },
    { label: "Update twin", text: "The digital twin revises its state estimate and how sure it is." },
    { label: "Decide", text: "Engineers get repair and maintenance priorities, and the loop repeats." },
  ],

  // kind: "research" | "course"   status: "ongoing" | "completed"
  // featured: true shows on Home. The FIRST featured item becomes the tall card (and shows its figure).
  research: [
    {
      kind: "research",
      status: "completed",
      featured: true,
      title: "AfriCrack: benchmarking domain-shift robustness of crack segmentation models in African infrastructure",
      period: "May 2024 – Nov 2025",
      where: "ML Collective, Lagos",
      role: "Lead investigator · With T. Ibrahim, Z. Awofeso and I. Olusheye",
      summary:
        "A benchmark of 1,000 annotated images of cracks in Nigerian buildings. Models trained on controlled-condition data (SDNET2018) lost about 50% IoU when transferred to AfriCrack. Current work tests Magnitude-Aware Linear Attention in SegFormer for efficiency and accuracy.",
      tags: ["Domain shift", "Crack segmentation", "Benchmark"],
      links: [{ label: "View dataset", href: "https://doi.org/10.5281/zenodo.23735697" }],
      figure: { src: "assets/img/africrack.png", alt: "AfriCrack", caption: "Sample Predictions from the AfriCrack Benchmark" , width: "100%", ratio: "4 / 3" },
    },
    //     {
    //   kind: "research",
    //   status: "ongoing",
    //   featured: false,
    //   title: "Operator-corrected Kalman filtering for structural state estimation",
    //   period: "2026 – present",
    //   where: "In collaboration with UNSW, Australia",
    //   role: "With Dr. Mehri, UNSW · Stage: literature review",
    //   summary:
    //     "Estimating a structure's hidden state, the unknown force acting on it, and local stiffness changes from only a few accelerometers. The idea is to pair a physics-based Kalman filter with a learned correction for what the physics model misses, while keeping the estimate's uncertainty honest. Currently reviewing the literature to define the approach.",
    //   tags: ["Kalman filtering", "State estimation", "Uncertainty quantification", "Structural health monitoring"],
    //   links: [],
    //   figure: null,
    // },
    {
      kind: "research",
      status: "ongoing",
      featured: false,
      title: "Corrosion severity segmentation with limited data and uncertainty",
      period: "2026 – present",
      where: "Nanyang Technological University, Singapore",
      role: "Research intern · Supervisor: Asst. Prof. Fu Yuguang · Stage: Literature Review",
      summary:
        "Extends the multi-region corrosion study to rate corrosion severity pixel by pixel when labeled images are scarce. The work compares ways of adapting large pretrained vision models, tests synthetic images for the rare severe class, and checks whether the model's uncertainty reflects how severe the corrosion is. The literature review is complete and the work is just starting.",
      tags: ["Corrosion", "Foundation models", "Data scarcity", "Uncertainty"],
      links: [],
      figure: null,
    },
    {
      kind: "research",
      status: "completed",
      featured: true,
      title: "Multi-region corrosion detection and morphological characterization using computer vision",
      period: "Feb 2026 – Mar 2026",
      where: "Nanyang Technological University, Singapore",
      role: "Research intern · Supervisor: Asst. Prof. Fu Yuguang",
      summary:
        "Vision-based corrosion severity estimation. Segmentation models (SegNet, SegFormer) reach up to 89% F1. Connected-component and contour analysis extract region-level geometry, which then trains an ML model to estimate severity.",
      tags: ["Computer vision", "Segmentation", "Severity estimation"],
      links: [{ label: "View poster", href: "https://docs.google.com/presentation/d/1K3feDNsAbeGgQMXMfvNcnaJdqb61T88I/edit?usp=sharing&ouid=114012846373231095213&rtpof=true&sd=true" }],
      figure: { src: "assets/img/gcf.png", alt: "Sample Prediction", caption: "Segmentated Mask" },
    },
    {
      kind: "course",
      status: "completed",
      featured: true,
      title: "Railway crossing digital twin system",
      period: "Apr 2026",
      where: "Carnegie Mellon University",
      role: "Course project",
      summary:
        "A framework for a digital-twin-based pedestrian railway crossing. Train and signal twins use state estimation, uncertainty quantification and confidence-aware decisions, with a real-time pipeline built on Python, MQTT (Mosquitto) and Streamlit.",
      tags: ["Digital twin", "IoT", "Uncertainty quantification"],
      links: [{ label: "View code", href: "https://github.com/Yusuf-Olaniyi/RailwayCrossingDigitalTwinSystem" }],
      figure: { src: "assets/img/railwaydt.png", alt: "Railway Crossing Digital Twin", caption: "Digital Twin Dashboard" },
    },
    {
      kind: "research",
      status: "completed",
      featured: false,
      title: "Natural frequency and mode shape of beams using analytical and finite element methods",
      period: "Aug 2024",
      where: "University of Lagos",
      role: "Graduating project · Supervisor: Dr. A.O. Oyelade",
      summary:
        "Python implementations of Euler-Bernoulli beam deflection (Rayleigh-Ritz and virtual work) and of natural frequencies for uniform and tapered beams under several end conditions.",
      tags: ["Structural dynamics", "Finite element", "Python"],
      links: [{ label: "View code", href: "https://github.com/Yusuf-Olaniyi/natural-frequency-of-beams" }],
      figure: { src: "assets/img/unilag.png", alt: "Beam Dynamics", caption: "Beam Dynamics." },
    },
  ],

  publications: [
    {
      label: "Dataset",
      year: "2026",
      title: "AfriCrack: A Pixel-Level Crack Segmentation Dataset for Domain-Shift Research in Sub-Saharan Africa",
      venue: "Zenodo",
      note: "",
      links: [{ label: "Dataset", href: "https://doi.org/10.5281/zenodo.23735697" }],
    },
    {
      label: "Preprint",
      year: "2026",
      title: "AfriCrack: Benchmarking Domain-Shift Robustness of Crack Segmentation Models in African Infrastructure",
      venue: "ML Collective",
      note: "Lead investigator",
      links: [{ label: "Preprint", href: "https://drive.google.com/file/d/165Th7gPuKtQJuJyXkI3M9oLhWKVvM6zW/view?usp=drive_link" }],
    },
    {
      label: "Poster",
      year: "2026",
      title: "Multi-Region Corrosion Detection and Morphological Characterization Using Computer Vision",
      venue: "Global Connect Fellowship, Nanyang Technological University",
      note: "",
      links: [{ label: "Poster", href: "https://docs.google.com/presentation/d/1K3feDNsAbeGgQMXMfvNcnaJdqb61T88I/edit?usp=sharing&ouid=114012846373231095213&rtpof=true&sd=true" }],
    },
    {
      label: "Journal article",
      year: "2024",
      title: "Prediction of compressive strength of nano silica and micro silica from rice husk ash using multivariate regression models",
      venue: "AI in Civil Engineering 3, 22",
      note: "",
      links: [{ label: "Paper", href: "https://doi.org/10.1007/s43503-024-00043-5" }],
    },
    {
      label: "Poster",
      year: "2024",
      title: "Crack detection in a building using a convolutional neural network",
      venue: "Deep Learning IndabaX Nigeria",
      note: "First Runner-Up, Poster Presenter",
      links: [{ label: "Poster", href: "https://docs.google.com/presentation/d/13xWMy-unuaJnquOXdzNGtwIHRGcAs2WWgVtpPYj22lc/edit?usp=sharing" }],
    },
    {
      label: "Talk",
      year: "2024",
      title: "Tech, Innovation, and Startups in AEC: Where Are We as an Industry?",
      venue: "Big 5 Construct Nigeria",
      note: "Speaker",
      links: [{ label: "Talk", href: "https://drive.google.com/file/d/1oqlcycW3iV_7202TCkMhGFUDHTtwryQf/view?usp=sharing" }],
    },
  ],

  // kind: "news" | "note". date: "YYYY-MM" or "YYYY-MM-DD". Newest first is applied automatically.
  updates: [
    {
      kind: "news",
      date: "2026-02",
      title: "Started as a research intern at NTU Singapore",
      text: "Working on corrosion detection and severity estimation with computer vision, supported by the Global Connect Fellowship.",
    },
    {
      kind: "news",
      date: "2026-02",
      title: "Selected as a Global Connect Fellow at NTU Singapore",
      text: "Selected among 1.5% of applicants for a research internship at NTU Singapore, supported by the Global Connect Fellowship.",
    },
    {
      kind: "news",
      date: "2025-08",
      title: "Started my MSc in Engineering AI at Carnegie Mellon University (Africa Campus)",
      text: "Coursework covers machine learning,deep learning, research methods and digital twins.",
    },
    {
      kind: "news",
      date: "2025-01",
      title: "Best Graduating Student, Civil Engineering, University of Lagos",
      text: "Graduated first in my class of 76 with a first-class degree and a GPA of 4.73/5.00.",
    },
    {
      kind: "news",
      date: "2024-09",
      title: "Honorary Mention, Deep Learning Indaba 2024",
      text: "AfriCrack received an Honorary Mention at Deep Learning Indaba 2024 for its contribution to crack segmentation in African infrastructure.",
    },
    {
      kind: "news",
      date: "2024-06",
      title: "Second Runner-Up, Poster Presenter, Deep Learning IndabaX Nigeria",
      text: "AfriCrack was named Runner-up in the IndabaX Nigeria 2024 Poster Presentation.",
    },
  ],

  // featured: true shows on Home; the Experience page shows all.
//   Carnegie Mellon University, Africa					      Kigali, Rwanda
// (Application of AI in Africa)		      Sep 2026 - Dec 2026
//.
// 

  experience: [
    {
      featured: true,
      period: "Sep 2026 – Dec 2026",
      title: "Graduate Teaching Assistant",
      org: "Carnegie Mellon University (Africa Campus)",
      highlights: [
        "Provided feedback to 79 students on both individual writing and group presentations.",
        "Contributed to course development by providing feedback based on my experience and observations from students' submissions.",
      ],
      tags: ["Teaching", "Seminar"],
    },
    {
      featured: true,
      period: "Feb 2026 – Mar 2026",
      title: "Research Intern",
      org: "Nanyang Technological University",
      highlights: [
        "Conducted a literature review to identify gaps and formulate a methodology for vision-based corrosion severity estimation.",
        "Developed and evaluated deep learning segmentation models (SegNet, SegFormer), achieving up to 89% F1-score.",
        "Implemented post-processing (connected components, contour analysis) to extract region-level geometric features."
      ],
      tags: ["Corrosion", "Segmentation", "Severity estimation"],
    },
    {
      featured: true,
      period: "May 2024 – Nov 2025",
      title: "Lead Investigator",
      org: "ML Collective",
      highlights: [
        "Led the research pipeline (literature review, data collection, and documentation) to develop 1,000 images of cracks from Nigerian buildings, annotated using Roboflow to promote diversity in the images used for crack detection.",
        "Trained and evaluated CNN-based models and Vision Transformer (SegFormer) using PyTorch, revealing a ~50% IoU performance drop for models trained on controlled-condition datasets (SDNET2018) when transferred to AfriCrack.",
      ],
      tags: ["Benchmarking", "Domain shift", "PyTorch"],
    },
    {
      featured: true,
      period: "Aug 2023 – Nov 2024",
      title: "SQL Facilitator",
      org: "Edubrige Academy Lagos",
      highlights: [
        "Designed and taught a full SQL curriculum and capstone projects to 40+ early-career professionals.",
      ],
      tags: ["SQL", "Teaching", "Curriculum design"],
    },
    {
      featured: true,
      period: "Jan 2023 – Jun 2023",
      title: "Civil Engineer Intern",
      org: "Ove Arup and Partners",
      highlights: [
        "Ran rebound hammer, ultrasonic pulse velocity and torque wrench tests on a 20,000 sqm factory and three apartments. The results informed the client's decision to acquire the factory.",
      ],
      tags: ["Non-destructive testing", "Structural assessment"],
    },
    {
      featured: false,
      period: "Jun 2022 – Oct 2022",
      title: "Machine Learning Engineer Intern",
      org: "TechPet Global",
      highlights: [
        "Clustered 100,000+ oil wells with K-means, built an equipment anomaly detector with PyCaret, and analysed 100,000+ sales records.",
        "Developed an ML model to detect anomalies in heavy equipment using the PyCaret Library with a team of two within 24 hours of learning to prevent operational damage.",
        "Analysed 100,000+ sales data records with Python to derive insights on factors contributing to sales to help clients make data-driven decisions."
      ],
      tags: ["K-means", "Anomaly detection", "Python"],
    },
  ],

  education: [
    {
      period: "Aug 2025 – Dec 2026",
      title: "MSc, Engineering Artificial Intelligence",
      org: "Carnegie Mellon University",
      summary: "GPA 3.88/4.00. Coursework: research methods, machine learning, deep learning, digital twins.",
      tags: ["Machine learning", "Deep learning", "Digital twins"],
    },
    {
      period: "Graduated Nov 2024",
      title: "BSc, Civil Engineering",
      org: "University of Lagos",
      summary: "First class, 4.73/5.00. Ranked 1st of 76. Best Graduating Student, Civil Engineering.",
      tags: ["Civil engineering", "Structural engineering", "Design and Analysis"],
    },
  ],

  leadership: [
    {
      period: "Jul 2023 – Aug 2024",
      title: "Program Coordinator",
      org: "Engineering Muslim Students’ Society of Nigeria",
      highlights: [
        "Raised average attendance at weekly activities by 71% by introducing new activities.",
        "Led a team of 9 that raised ₦1.2 million (about $760) in a month for the annual event.",
        "Managed a team of 10 that organised an Industry 5.0 event for 250+ students.",
        "Started a community for women to encourage cooperation and collaboration.",
      ],
    },
    {
      period: "Jan 2023 – Dec 2024",
      title: "Lead, Academic Excellence and Scholarship Support Access",
      org: "Nasir Giwa Mentorship Platform",
      highlights: [
        "Supported two members through the NHEF scholarship application, securing ₦3.2 million (about $4,100) of training.",
        "Started a state-wide annual essay competition for secondary school students.",
        "Ran two sessions on mentorship and academic excellence for 60 high schoolers.",
      ],
    },
  ],

  honors: [
    { year: "2026", text: "Global Connect Fellowship, Nanyang Technological University (top 1.5%)" },
    { year: "2025", text: "Best Graduating Student, Civil Engineering, University of Lagos" },
    { year: "2024", text: "First Runner-Up Poster Presenter, Deep Learning IndabaX Nigeria" },
    { year: "2023", text: "Scholar, Nigeria Higher Education Foundation Scholars Program (top 10%)" },
    { year: "2022", text: "Shell AI EV Hackathon (top 14% globally)" },
    { year: "2022", text: "Fellow, The Bridge Program (top 5%)" },
    { year: "2021", text: "Tutor of the Year (1 of 25), MSSN UNILAG Tutorial" },
  ],

  skills: [
    { group: "AI and machine learning", items: "PyTorch, TensorFlow, OpenCV, scikit-learn, Pandas, NumPy" },
    { group: "Programming", items: "Python, SQL" },
    { group: "Engineering", items: "AutoCAD, Revit, Tekla Structures" },
    { group: "Research tools", items: "LaTeX, Zotero, Web of Science, Image.io" },
    { group: "Data and analytics", items: "Power BI, Tableau, Microsoft Excel" },
  ],

  contact: {
    eyebrow: "Contact",
    title: "Let's {talk}",
    text: "I'm always open to connecting with people working on ideas at the intersection of civil engineering, AI, and technology. Whether it's a research collaboration, an opportunity to contribute, or simply an interesting idea to discuss, I'd love to hear from you.",
  },
};
