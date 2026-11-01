export const personalInfo = {
    name: "Adam Martoník",
    role: "Junior Software Engineer",
    status: "Otvorený pre stáže a junior príležitosti",
    email: "work.martonik@gmail.com",
    personalEmail: "adamko.martonik@gmail.com",
    phone: "+421 910 421 244",
    location: "Košice, Slovensko",
    github: "https://github.com/adam-martonik",
    linkedin: "https://www.linkedin.com/in/adam-martonik-567a89385/",
    about: "Som študent informatiky na Technickej univerzite v Košiciach so záujmom o vývoj softvéru. Rád sa učím praxou, rýchlo sa adaptujem a hľadám príležitosť, kde môžem rozvíjať svoje programátorské zručnosti, pracovať na reálnych projektoch a získavať nové skúsenosti v IT prostredí.",
    interests: "Tancujem vo folklórnom súbore Železiar a zaujímam sa o Formulu 1."
};

export const education = [
    {
        id: 1,
        period: "2024 – Súčasnosť (očak. 2027)",
        school: "Technická univerzita v Košiciach",
        field: "Informatika (Bakalárske štúdium)",
        location: "Košice, Slovensko",
        highlights: "Algoritmy a dátové štruktúry, OOP, Databázové systémy, Operačné systémy"
    },
    {
        id: 2,
        period: "2016 – 2024",
        school: "Evanjelické gymnázium J. A. Komenského",
        field: "Bilingválne štúdium (slovensko-anglické)",
        location: "Košice, Slovensko",
        highlights: "Plynulá odborná angličtina (C1), analytické myslenie"
    }
];

export const skills = {
    backend: ["Java 21", "Spring Boot 3", "Python 3", "REST API", "PostgreSQL", "Hibernate 6", "Docker Compose"],
    frontend: ["React 18", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Vite", "PWA"],
    securityAndTools: ["Git & GitHub", "Linux / Bash", "CIRCL VLOOKUP", "NVD CVE/CVSS", "SQLite", "ReportLab"],
    concepts: ["Multi-tenancy", "OOP & MVC", "Waterfall SDLC", "Dátové štruktúry", "Algoritmy"],
    languages: ["Angličtina (C1 – plynulá)", "Slovenčina (rodný jazyk)"]
};

export const projects = [
    {
        id: 1,
        title: "KlubManager SaaS",
        subtitle: "Multi-tenant platforma pre kluby a súbory",
        description: "Multi-tenant mikro-SaaS platforma s dátovou izoláciou v PostgreSQL (Hibernate 6 @TenantId), bezstavovou JWT autentifikáciou (Spring Security 6), vlastnou binárnou implementáciou slovenského Pay by Square podľa SBA špecifikácie (LZMA/Base32Hex/ZXing), automatickým párovaním SEPA CAMT.053 XML výpisov a offline PWA dochádzkou.",
        techStack: ["Java 21", "Spring Boot 3.4", "React 18", "TypeScript", "PostgreSQL", "Docker Compose", "PWA"],
        link: "https://github.com/adam-martonik/app_for_groups",
        buttonText: "GitHub 🔗",
        featured: true,
        category: "Full-Stack"
    },
    {
        id: 2,
        title: "Vulnerability Lookup",
        subtitle: "Osobný bezpečnostný sieťový audítor",
        description: "Defenzívny auditovací nástroj v Pythone pre lokálne siete s validáciou RFC 1918 Private Network Guard. Vykonáva pasívny banner grabbing, mapovanie na CPE 2.3, asynchrónne vyhľadávanie CVE a CVSS skóre cez CIRCL VLOOKUP a NIST NVD v2.0 API, lokálnu SQLite cache a interaktívny HTML report.",
        techStack: ["Python 3.11+", "Network Security", "CIRCL VLOOKUP", "NIST NVD", "SQLite", "CVSS 3.1"],
        link: "https://github.com/adam-martonik/Vulnerability_Lookup_Personal_network",
        buttonText: "GitHub 🔗",
        featured: true,
        category: "Cybersecurity"
    },
    {
        id: 3,
        title: "Self-Diagnostic Kiosk (Hack jak Brno)",
        subtitle: "Samoobslužný diagnostický kiosk pre lekárne",
        description: "Prototyp samoobslužného diagnostického kiosku pre lekárne – od identifikácie pacienta po doručenie výsledkov. Obsahuje Flask backend s REST API pre hardware, pseudonymizáciu dát pacienta (GDPR-compliant), dynamické generovanie lekárskych PDF reportov a nasadenie na Renderi.",
        techStack: ["Python", "Flask", "JavaScript", "REST API", "ReportLab", "Render"],
        link: "https://self-diagnostics-u2hg.onrender.com/",
        buttonText: "Pozrieť web 🔗",
        featured: true,
        category: "Web & Hardware"
    },
    {
        id: 4,
        title: "Group Attendance Automation",
        subtitle: "Automatizácia spracovania skupinovej dochádzky",
        description: "Desktopová aplikácia na spracovanie dochádzky a stravovacích požiadaviek väčších skupín, ktorá nahradila manuálne spracovanie v tabuľkách. Integruje parsovanie dát z Google Sheets API vrátane filtrovania chybných záznamov.",
        techStack: ["Python", "CustomTkinter", "Google Sheets API"],
        link: "https://github.com/adam-martonik/attendance-automation-showcase",
        buttonText: "GitHub 🔗",
        featured: false,
        category: "Automatizácia"
    },
    {
        id: 5,
        title: "Job Alert Scraper",
        subtitle: "Automatizovaný scraper pracovných ponúk",
        description: "Skript, ktorý denne prehľadáva profesia.sk a posiela HTML súhrn nových študentských a junior pozícií na e-mail. Implementuje filtrovanie podľa kľúčových slov, sledovanie firiem a deduplikáciu cez perzistentný JSON stav bez ukladania credentials v kóde.",
        techStack: ["Python", "Requests", "BeautifulSoup", "SMTP"],
        link: "https://github.com/adam-martonik/email_jobs",
        buttonText: "GitHub 🔗",
        featured: false,
        category: "Automatizácia"
    },
    {
        id: 6,
        title: "Budget Planner",
        subtitle: "Správa osobných financií v čistej Jave",
        description: "Desktopová aplikácia na správu osobných financií v čistej Jave bez externých knižníc. Využíva čistý dátový model oddelený od UI vrstvy a ukladanie dát cez Java serializáciu.",
        techStack: ["Java", "Gradle"],
        link: "https://github.com/adam-martonik/budget",
        buttonText: "GitHub 🔗",
        featured: false,
        category: "Desktop"
    }
];

export const experience = [
    {
        id: 1,
        title: "Lektor programovania pre deti",
        company: "IT – svet mladých, o.z.",
        period: "Február 2026 – súčasnosť",
        tasks: [
            "výučba základov algoritmizácie a logického myslenia pre deti prostredníctvom platformy Code.org",
            "vysvetľovanie konceptov začiatočníkom cez blokové programovanie (podmienky, cykly, udalosti)",
            "vedenie žiakov k samostatnému riešeniu problémov pri tvorbe jednoduchých interaktívnych hier"
        ]
    },
    {
        id: 2,
        title: "Brigádnik v autopožičovni",
        company: "AT Car SK, s. r. o.",
        period: "Júl 2024 – súčasnosť",
        tasks: [
            "práca s interným systémom spoločnosti",
            "administratíva, evidencia dokumentov a zmlúv",
            "komunikácia so zákazníkmi"
        ]
    },
    {
        id: 3,
        title: "Čašník",
        company: "U Troch ruží",
        period: "August 2023 – August 2024",
        tasks: [
            "komunikácia so zákazníkmi",
            "riešenie problémových situácií",
            "práca v rýchlom a stresovom prostredí"
        ]
    },
    {
        id: 4,
        title: "Pokladník",
        company: "DEKORT, spol. s r.o.",
        period: "Október 2022 – Marec 2023",
        tasks: [
            "obsluha pokladne a práca s hotovosťou",
            "starostlivosť o zákazníkov",
            "zodpovednosť za presnosť transakcií"
        ]
    }
];
