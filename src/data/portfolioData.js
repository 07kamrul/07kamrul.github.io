export const personalInfo = {
  name: "Md. Kamrul Hasan",
  title: "Software Engineer",
  titles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Flutter Developer",
    ".NET Core Specialist",
    "Java Spring Boot Dev",
  ],
  email: "mdkamrulhasanewu@gmail.com",
  phone: "(+880) 1758290421",
  whatsapp: "+8801758290421",
  location: "Mirpur, 1216, Dhaka, Bangladesh",
  nationality: "Bangladeshi",
  github: "https://github.com/07kamrul",
  linkedin: "https://www.linkedin.com/in/07kamrul/",
  about:
    "Experienced software engineer with over 6 years of expertise in C#, .NET Core, MVC, Angular, and Flutter. Specialized in developing web applications, microservices, and solutions for Micro Credit, ERP, and GIS. Skilled in GIT for version control, with a passion for creating impactful software and driving technological advancements.",
  stats: [
    { label: "Years Experience", value: 6, suffix: "+" },
    { label: "Companies", value: 4, suffix: "" },
    { label: "Projects Delivered", value: 8, suffix: "+" },
    { label: "Technologies", value: 15, suffix: "+" },
  ],
};

export const skills = [
  { category: "Backend", items: ["C# / .NET Core", "Java / Spring Boot", "Python / Frappe", "RESTful APIs", "Microservices"] },
  { category: "Frontend", items: ["Angular", "JavaScript", "MVC", "Bootstrap", "HTML/CSS"] },
  { category: "Mobile", items: ["Flutter", "Dart"] },
  { category: "Database", items: ["MSSQL", "MySQL", "PostgreSQL"] },
  { category: "DevOps & Tools", items: ["Git", "Linux (Red Hat, Debian)", "Grafana", "Agile / Scrum", "RFID Integration"] },
];

export const topSkills = [
  { name: "C# / .NET Core", level: 90 },
  { name: "Java / Spring Boot", level: 80 },
  { name: "Flutter / Dart", level: 85 },
  { name: "Angular / JS", level: 78 },
  { name: "SQL / Databases", level: 82 },
  { name: "RESTful APIs", level: 88 },
];

export const experiences = [
  {
    id: 1,
    company: "ASA Bangladesh",
    location: "Dhaka, Bangladesh",
    role: "Software Engineer",
    period: "Oct 2021 – Jan 2024",
    type: "past",
    sector: "Financial & Insurance",
    website: "https://asa.org.bd/",
    description:
      "Leveraged expertise in C#, .NET 8, MVC, AngularJS, and SQL Server to develop scalable web and mobile applications, with a focus on microfinance solutions that enhance transaction integrity, streamline processes, and drive user adoption.",
    tags: ["C#", ".NET 8", "AngularJS", "SQL Server", "MVC", "Microservices"],
  },
  {
    id: 2,
    company: "CTrends Software & Services Ltd.",
    location: "Dhaka, Bangladesh",
    role: "Java Programmer",
    period: "May 2021 – Sep 2021",
    type: "past",
    sector: "Information & Communication",
    website: "https://www.ctrends-software.com/",
    description:
      "Applied skills in object-oriented design, Spring Boot, RESTful APIs, and Flutter to build scalable, user-centric web and mobile applications—delivering impactful solutions like citizen issue reporting with KYC and GIS tracking.",
    tags: ["Java", "Spring Boot", "Flutter", "RESTful APIs", "GIS", "KYC"],
  },
  {
    id: 3,
    company: "Naztech Inc.",
    location: "Dhaka, Bangladesh",
    role: "Junior Software Developer",
    period: "Feb 2019 – Dec 2020",
    type: "past",
    sector: "FinTech",
    website: "https://naztech.io/",
    description:
      "Led Agile software development projects using Spring Boot, Hibernate, and Python Frappe, with a focus on database optimization, HR module analysis, and system automation through RFID integration, Grafana visualization, and scheduled tasks.",
    tags: ["Spring Boot", "Python", "Frappe", "Hibernate", "Grafana", "RFID"],
  },
];

export const projects = [
  {
    id: 1,
    title: "GPS Tracking Application",
    company: "Self",
    period: "Dec 2024 – Present",
    description:
      "Built a location-based messaging app using Flutter, Laravel (backend), and GIS with OSM maps. The app connects users within a 10-meter radius, offering real-time chat, live location updates, and an interactive map to boost proximity-based engagement.",
    tags: ["Flutter", "Laravel", "GIS", "OSM Maps", "Real-time Chat"],
    gradient: "from-cyan-500 to-blue-600",
    icon: "🗺️",
  },
  {
    id: 2,
    title: "Server Abnormality Alert App",
    company: "Self",
    period: "Sep 2024 – Nov 2024",
    description:
      "Developed a Flutter app that polls server health every 5 minutes via API, triggering loud alerts with a tap-to-silence feature. This improved response times and system reliability by minimizing downtime.",
    tags: ["Flutter", "REST API", "Push Notifications", "Monitoring"],
    gradient: "from-purple-500 to-pink-600",
    icon: "🔔",
  },
  {
    id: 3,
    title: "MEIKO — Japanese Learning Platform",
    company: "Self",
    period: "Apr 2024 – Aug 2024",
    description:
      "Enhanced the MEIKO platform using C# ASP.NET, JavaScript, MSSQL, and Flutter. Implemented scheduled push notifications (1–4 weeks post-login) with dynamic local rescheduling. Boosted user re-engagement by 30%.",
    tags: ["C# ASP.NET", "Flutter", "MSSQL", "Push Notifications"],
    gradient: "from-orange-500 to-red-600",
    icon: "🎌",
  },
  {
    id: 4,
    title: "MakeShop — Batch Email Automation",
    company: "Self",
    period: "Feb 2024 – Apr 2024",
    description:
      "Developed a Java-based batch process for Medipal Holdings to automate email alerts and clean outdated images, improving efficiency, reducing storage, and enhancing performance with robust error handling and logging.",
    tags: ["Java", "Spring Boot", "Batch Processing", "Email Automation"],
    gradient: "from-green-500 to-teal-600",
    icon: "🛒",
  },
  {
    id: 5,
    title: "ASA Microfinance Management System",
    company: "ASA Bangladesh",
    period: "May 2022 – May 2024",
    description:
      "Built a microfinance module to streamline secure financial transactions using C#, MVC, .NET Core, MSSQL, and AngularJS. Delivered reliable, efficient solution with .NET 6 transaction scope and optimized APIs.",
    tags: ["C#", ".NET Core", "AngularJS", "MSSQL", "Microservices"],
    gradient: "from-blue-500 to-indigo-600",
    icon: "💰",
  },
  {
    id: 6,
    title: "Motor Loan Management System",
    company: "ASA Bangladesh",
    period: "Oct 2021 – May 2022",
    description:
      "Built a motorcycle loan system for efficient employee loan processing and automated salary deductions, integrated with PMIS. Used C#, .NET 5, MVC, MSSQL, Angular, with microservices and RESTful APIs.",
    tags: ["C#", ".NET 5", "Angular", "MSSQL", "PMIS Integration"],
    gradient: "from-yellow-500 to-orange-600",
    icon: "🏍️",
  },
  {
    id: 7,
    title: "THE CITIZEN — Issue Reporting App",
    company: "CTrends Software",
    period: "Jan 2021 – Sep 2021",
    description:
      "Built a citizen issue-reporting app with image uploads, KYC, and GIS tracking using Java, Spring Boot, PostgreSQL, and Flutter. Delivered a scalable, user-friendly solution with high adoption and resolution efficiency.",
    tags: ["Java", "Spring Boot", "Flutter", "PostgreSQL", "GIS", "KYC"],
    gradient: "from-red-500 to-rose-600",
    icon: "🏙️",
  },
  {
    id: 8,
    title: "ERPNext HR & Payroll Solution",
    company: "Naztech Inc.",
    period: "Feb 2019 – Dec 2020",
    description:
      "Built an HR & Payroll system to automate employee management, attendance, leave, payroll, and reporting using Python, Frappe, MySQL, Bootstrap 3, and Jinja2.",
    tags: ["Python", "Frappe", "MySQL", "Bootstrap", "Jinja2"],
    gradient: "from-teal-500 to-cyan-600",
    icon: "👥",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science",
    field: "Computer Science & Engineering",
    institution: "East West University",
    location: "Dhaka, Bangladesh",
    period: "May 2014 – Dec 2018",
    grade: "2.64 / 4.0 (78%)",
    credits: 141,
    thesis: "A Mutual Information Based Wrapper Method for Software Defect Prediction",
    website: "https://www.ewubd.edu/",
    icon: "🎓",
  },
  {
    id: 2,
    degree: "Top-Up IT Training",
    field: "Web Application Dot Net",
    institution: "NASSCOM IT-ITES Sector Skill Council (SSC)",
    location: "Dhaka, Bangladesh",
    period: "Mar 2019 – Sep 2019",
    icon: "💻",
  },
  {
    id: 3,
    degree: "Japanese Language Training Program",
    field: "Japanese Language",
    institution: "Human Academy - Japanese Language School",
    location: "Japan",
    period: "Feb 2024 – Aug 2024",
    website: "https://hajl.athuman.com/",
    icon: "🇯🇵",
  },
];
