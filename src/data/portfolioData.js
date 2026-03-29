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
        "Only the information required to run the project’s core flows should be accessed.",
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
        "Where possible, preferences and cached project data should stay on the user’s device or be retained only as long as needed.",
        "Users should be able to limit permissions from device or app settings, although doing so may reduce available features.",
        "If data-sensitive features expand in the future, the privacy policy should be updated to reflect the new behavior clearly.",
      ],
    },
  ],
});

const muazzinPrivacyPolicy = {
  intro:
    "We aim to use the minimum data needed to provide core Islamic utility features, and keep as much as possible on your device.",
  sections: [
    {
      title: "What Muazzin Does",
      summary:
        "Muazzin is an Islamic utility app focused on prayer support, direction finding, Quran reading, Ramadan reminders, mosque discovery, and donation tools.",
      bullets: [
        "The app helps users see prayer times, find the Qibla direction, view Quran and Hadith content, discover nearby mosques, and manage Ramadan-related reminders.",
        "It also includes a major mosque-finder experience that can surface nearby mosques and draw a shortest road path polyline to a selected mosque.",
        "Most religious utility features are designed to work with locally stored settings so the app can remain practical and privacy-conscious.",
      ],
    },
    {
      title: "Mosque Finder and Route Polyline",
      summary:
        "The nearby mosque finder and shortest-path route feature depend on location and map-related requests.",
      bullets: [
        "Your location may be used to identify nearby mosques around you and sort them by distance.",
        "When you request directions to a mosque, the app may call routing services to fetch a road-based path and render that path as a polyline on the map.",
        "Route data is used to display navigation-style guidance inside the app experience and should be treated as location-related data.",
      ],
    },
    {
      title: "Data We Access",
      summary:
        "We only access device data that is needed for the app’s core features.",
      bullets: [
        "Location may be accessed to calculate accurate prayer times, show the Qibla direction correctly, and help find nearby mosques.",
        "If you use the mosque-finder route feature, origin and destination coordinates may be processed to generate a shortest path polyline.",
        "Notification permission may be used for prayer alerts, Azan reminders, Sehri and Iftar alerts, Hadith reminders, and restricted prayer-time alerts.",
        "Your app preferences such as language, theme, notification choices, Quran display mode, and pinned mosque are stored on your device.",
      ],
    },
    {
      title: "How Your Data Is Used",
      summary:
        "Data is used only to deliver the Islamic features you choose to use.",
      bullets: [
        "Location is used to calculate local prayer times and improve map-based or direction-based features.",
        "Notification settings are used to schedule reminders and alerts at the correct times.",
        "Saved settings are used to personalize the app experience and restore your choices between sessions.",
      ],
    },
    {
      title: "What Stays On Your Device",
      summary:
        "A large portion of the app’s operational data is intended to stay local.",
      bullets: [
        "Prayer-time cache, user preferences, notification choices, pinned mosque selection, and display settings are stored locally on your device.",
        "The app is designed so that core preferences do not require a user account.",
        "We do not describe the app as selling personal data, and this policy is written for a privacy-first utility app.",
      ],
    },
    {
      title: "Third-Party and Connected Services",
      summary:
        "Some app features rely on external packages or remote content providers.",
      bullets: [
        "Map, content, notification, and platform services may involve third-party libraries or APIs that operate according to their own terms and platform rules.",
        "Mosque-finder and routing features may use remote mosque data sources and routing services to return nearby results and shortest road-path polylines.",
        "Firebase is initialized by the app platform setup, but this policy should be updated again if future versions add analytics, sign-in, or cloud data sync.",
        "If remote mosque, Quran, or Hadith content sources are expanded later, the policy should continue to reflect exactly what data is requested and why.",
      ],
    },
    {
      title: "Your Choices",
      summary:
        "You remain in control of permissions and notification behavior.",
      bullets: [
        "You can change language, theme, notification settings, Azan preferences, and display preferences from the Settings screen.",
        "You can deny or revoke location and notification permissions from your device settings, though some features may then become limited.",
        "If you no longer want locally stored app preferences, clearing app data or uninstalling the app will generally remove them from your device.",
      ],
    },
  ],
};

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
    privacyPolicy: createGenericPrivacyPolicy(
      "GPS Tracking Application",
      "real-time location sharing, nearby messaging, interactive maps, and GIS-based engagement"
    ),
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
    privacyPolicy: createGenericPrivacyPolicy(
      "Server Abnormality Alert App",
      "server health monitoring, alert delivery, and response-time visibility"
    ),
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
    privacyPolicy: createGenericPrivacyPolicy(
      "MEIKO — Japanese Learning Platform",
      "learning workflows, scheduled reminders, and progress re-engagement features"
    ),
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
    privacyPolicy: createGenericPrivacyPolicy(
      "MakeShop — Batch Email Automation",
      "batch processing, automated notifications, and operational content maintenance"
    ),
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
    privacyPolicy: createGenericPrivacyPolicy(
      "ASA Microfinance Management System",
      "financial workflow management, transaction processing, and internal business operations"
    ),
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
    privacyPolicy: createGenericPrivacyPolicy(
      "Motor Loan Management System",
      "loan processing, payroll-linked deductions, and employee finance administration"
    ),
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
    privacyPolicy: createGenericPrivacyPolicy(
      "THE CITIZEN — Issue Reporting App",
      "citizen issue reporting, media uploads, identity checks, and GIS-based case tracking"
    ),
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
    privacyPolicy: createGenericPrivacyPolicy(
      "ERPNext HR & Payroll Solution",
      "HR operations, payroll workflows, attendance management, and employee reporting"
    ),
  },
  {
    id: 9,
    title: "Muazzin — Qibla, Salah, Quran",
    company: "Self",
    period: "2025 – Present",
    description:
      "Designed a Bangladesh-focused Islamic utility app that combines IFB-aligned prayer times, Qibla direction, nearest mosque discovery, crowd-sourced Jamat schedules, Azan notifications, Ramadan tools, and offline-first support in a single Bangla-first mobile experience.",
    tags: ["Flutter", "PWA", "PostGIS", "OpenStreetMap", "Adhan", "Offline-first"],
    gradient: "from-emerald-500 to-teal-700",
    icon: "🕌",
    privacyPolicy: muazzinPrivacyPolicy,
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
