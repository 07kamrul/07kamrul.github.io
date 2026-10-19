export const personalInfo = {
  name: "Kamrul Hasan",
  title: "Programmer",
  titles: [
    "Software Engineer",
    "Back End Developer",
    "Full Stack Developer",
    "Mobile Developer",
    "DevOps Engineer",
  ],
  email: "mdkamrulhasanewu@gmail.com",
  phone: "(+880) 1758290421",
  whatsapp: "+8801758290421",
  location: "Bangladesh",
  nationality: "Bangladeshi",
  github: "https://github.com/07kamrul",
  linkedin: "https://www.linkedin.com/in/07kamrul/",
  about:
    "Experienced software engineer specializing in C#, .NET, microservices, Angular, and Flutter. Over six years building web and mobile applications using C#, .NET Core, .NET 8, Java, Spring Boot, Angular, and Flutter for microfinance, ERP, GIS, and FinTech domains, with a focus on scalable microservices, API development, performance, and user engagement.",
  stats: [
    { label: "Years Experience", value: 6, suffix: "+" },
    { label: "Companies", value: 3, suffix: "" },
    { label: "Domains", value: 4, suffix: "" },
    { label: "Technologies", value: 20, suffix: "+" },
  ],
};

export const skills = [
  { category: "Backend", items: ["C#", ".NET", ".NET Core", ".NET 8+", "ASP.NET", "ASP.NET MVC", "Java", "Spring Boot", "RESTful APIs", "Microservices"] },
  { category: "Frontend", items: ["Angular", "AngularJS", "JavaScript", "MVC"] },
  { category: "Mobile", items: ["Flutter", "Dart"] },
  { category: "Database", items: ["SQL", "MSSQL", "SQL Server", "PostgreSQL", "MySQL"] },
  { category: "Tools & Platforms", items: ["Git", "Linux", "Debian", "Grafana", "Frappe", "ERPNext", "Laravel", "GIS", "RADIUS"] },
];

export const topSkills = [
  { name: "C# / .NET", level: 90 },
  { name: ".NET Core / .NET 8+", level: 88 },
  { name: "Java / Spring Boot", level: 84 },
  { name: "Flutter / Dart", level: 86 },
  { name: "Angular / AngularJS", level: 82 },
  { name: "SQL / Databases", level: 84 },
];

export const experiences = [
  {
    id: 1,
    company: "ASA Bangladesh",
    location: "Dhaka, Bangladesh",
    role: "Software Engineer",
    period: "Oct 2021 - Present",
    type: "past",
    sector: "Microfinance",
    website: "https://asa.org.bd/",
    description:
      "Built scalable microfinance web applications using C#, .NET Core, MVC, and AngularJS, improving transaction integrity and API performance while driving user adoption.",
    tags: ["C++", ".NET Core", "MVC", "AngularJS", "SQL Server", "Microservices"],
  },
  {
    id: 2,
    company: "CTrends Software & Services Ltd.",
    location: "Dhaka, Bangladesh",
    role: "Java Programmer",
    period: "Jan 2021 - Sep 2021",
    type: "past",
    sector: "Information & Communication",
    website: "https://www.ctrends-software.com/",
    description:
      "Developed Spring Boot RESTful services and Flutter front-ends for citizen issue-reporting and KYC/GIS features, delivering scalable solutions with high adoption and resolution efficiency.",
    tags: ["Java", "Spring Boot", "Flutter", "RESTful APIs", "GIS", "KYC"],
  },
  {
    id: 3,
    company: "Naztech Inc.",
    location: "Dhaka, Bangladesh",
    role: "Junior Software Developer",
    period: "Feb 2019 - Dec 2020",
    type: "past",
    sector: "FinTech",
    website: "https://naztech.io/",
    description:
      "Led development of ERPNext-based HR and Payroll modules and integrated automation features including RFID, scheduled tasks, and Grafana, improving reporting, attendance accuracy, and operational efficiency.",
    tags: ["Python", "Frappe", "MySQL", "ERPNext", "Linux", "Grafana"],
  },
];

const createGenericPrivacyPolicy = (projectName, features) => ({
  intro:
    `${projectName} follows a minimal-data approach. Any project data is intended to be used only to deliver the product features users actively choose to use.`,
  sections: [
    {
      title: "What This Project Does",
      summary:
        "This project delivers feature-specific product functionality without collecting more user data than necessary.",
      bullets: [
        `${projectName} focuses on ${features}.`,
        "Its experience is designed around task completion, usability, and practical day-to-day workflows.",
        "Any data handling should remain aligned with the core product experience rather than unrelated secondary use.",
      ],
    },
    {
      title: "Data We Access",
      summary:
        "Only the information required to run the project's core flows should be accessed.",
      bullets: [
        "Depending on the feature set, the project may process user input, device state, or feature-specific content needed to complete actions.",
        "Permissions or connected services should only be requested when they directly support visible product functionality.",
        "Unnecessary background collection and unrelated personal-data access should be avoided.",
      ],
    },
    {
      title: "How Data Is Used",
      summary:
        "Project data should be used only for the user-facing functionality the user expects.",
      bullets: [
        "Information is used to power the main workflow, personalize the active session, and improve reliability of the product experience.",
        "Saved preferences should only be used to remember settings and restore the product state between sessions.",
        "Data should not be repurposed beyond the feature scope without a clear product reason and an updated policy.",
      ],
    },
    {
      title: "Storage and User Control",
      summary:
        "Users should remain in control of preferences, permissions, and removable local data.",
      bullets: [
        "Where possible, preferences and cached project data should stay on the user's device or be retained only as long as needed.",
        "Users should be able to limit permissions from device or app settings, although doing so may reduce available features.",
        "If data-sensitive features expand in the future, the privacy policy should be updated to reflect the new behavior clearly.",
      ],
    },
  ],
});

export const projects = [
  {
    id: 6,
    title: "Muazzin - Qibla, Salah, Quran",
    company: "Personal Project",
    period: "2026 - Present",
    description:
      "Privacy-first Android app for Muslims with prayer times, Azan alerts, Qibla compass, nearest mosque finder with directions, Ramadan schedule, and a Quran, Hadith and dua library. Works mostly offline, with no ads or analytics SDKs.",
    tags: ["Flutter", "Dart", "Android", "Firebase", "OpenStreetMap", "REST APIs"],
    gradient: "from-teal-500 to-emerald-600",
    icon: "MZN",
    hasFullPolicy: true,
    policyUrl: "muazzin/",
    privacyPolicy: {
      intro:
        "Muazzin keeps data on your device wherever possible. The full privacy policy is shown below.",
      sections: [],
    },
  },
  {
    id: 1,
    title: "Learning Platform Re-Engagement",
    company: "Professional Project",
    period: "2024",
    description:
      "Improved a learning platform's user re-engagement by 30% through web/mobile enhancements focused on maintainability, performance, and user activity.",
    tags: ["C#", ".NET", "Flutter", "JavaScript", "MSSQL", "User Engagement"],
    gradient: "from-orange-500 to-red-600",
    icon: "LMS",
    privacyPolicy: createGenericPrivacyPolicy(
      "Learning Platform Re-Engagement",
      "learning workflows, user activity, performance improvement, and re-engagement features"
    ),
  },
  {
    id: 2,
    title: "System Reliability Alerting Tools",
    company: "Professional Project",
    period: "2024",
    description:
      "Built alerting tools to improve system reliability and response visibility, helping reduce downtime risk and support faster operational action.",
    tags: ["Flutter", "RESTful APIs", "Monitoring", "Alerts", "System Reliability"],
    gradient: "from-purple-500 to-pink-600",
    icon: "ALRT",
    privacyPolicy: createGenericPrivacyPolicy(
      "System Reliability Alerting Tools",
      "system monitoring, alert delivery, response visibility, and reliability workflows"
    ),
  },
  {
    id: 3,
    title: "Transactionally Robust Microfinance Modules",
    company: "ASA Bangladesh",
    period: "Oct 2021 - Jan 2024",
    description:
      "Delivered scalable microfinance modules using C#, .NET Core, MVC, AngularJS, and SQL Server, improving transaction integrity, API performance, and user adoption.",
    tags: ["C#", ".NET Core", "MVC", "AngularJS", "SQL Server", "Microservices"],
    gradient: "from-blue-500 to-indigo-600",
    icon: "FIN",
    privacyPolicy: createGenericPrivacyPolicy(
      "Transactionally Robust Microfinance Modules",
      "microfinance workflows, transaction processing, API performance, and internal business operations"
    ),
  },
  {
    id: 4,
    title: "Citizen Issue Reporting Platform",
    company: "CTrends Software & Services Ltd.",
    period: "Jan 2021 - Sep 2021",
    description:
      "Developed Spring Boot RESTful APIs and Flutter interfaces for citizen issue reporting, KYC, and GIS tracking, delivering scalable tools with high adoption and resolution efficiency.",
    tags: ["Java", "Spring Boot", "Flutter", "RESTful APIs", "GIS", "KYC"],
    gradient: "from-red-500 to-rose-600",
    icon: "GIS",
    privacyPolicy: createGenericPrivacyPolicy(
      "Citizen Issue Reporting Platform",
      "citizen issue reporting, identity checks, GIS tracking, and resolution workflows"
    ),
  },
  {
    id: 5,
    title: "ERPNext HR & Payroll Automation",
    company: "Naztech Inc.",
    period: "Feb 2019 - Dec 2020",
    description:
      "Built ERPNext HR and Payroll modules with Python, Frappe, MySQL, Linux, RFID automation, scheduled tasks, and Grafana reporting to improve attendance accuracy and operational efficiency.",
    tags: ["Python", "Frappe", "MySQL", "ERPNext", "Linux", "Grafana"],
    gradient: "from-teal-500 to-cyan-600",
    icon: "ERP",
    privacyPolicy: createGenericPrivacyPolicy(
      "ERPNext HR & Payroll Automation",
      "HR operations, payroll workflows, attendance management, automation, and reporting"
    ),
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor's Degree",
    field: "Computer Science",
    institution: "East West University",
    location: "Bangladesh",
    period: "2014 - 2018",
    grade: "2.64 / 4.0",
    credits: 141,
    website: "https://www.ewubd.edu/",
    icon: "EDU",
  },
];
