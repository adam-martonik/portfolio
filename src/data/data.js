export const personalInfo = {
    name: "Adam Martonik",
    email: "adamko.martonik@gmail.com",
    phone: "+421910421244",
    about: "Som študent informatiky na Technickej univerzite v Košiciach so záujmom o vývoj softvéru. Rád sa učím praxou, rýchlo sa adaptujem a hľadám príležitosť, kde môžem rozvíjať svoje programátorské zručnosti, pracovať na reálnych projektoch a získavať nové skúsenosti v IT prostredí.",
    interests: "Tancujem vo folklórnom súbore Železiar a zaujímam sa o Formulu 1."
};

export const education = [
    {
        id: 1,
        period: "2024 - Súčasnosť",
        school: "Technická univerzita v Košiciach",
        field: "Informatika"
    },
    {
        id: 2,
        period: "2016 - 2024",
        school: "Evanjelické gymnázium J. A. Komenského",
        field: "Bilingválne štúdium"
    }
];

export const skills = {
    programming: ["Java", "C", "Python"],
    technologies: ["Unix/Linux", "Git"],
    languages: ["Angličtina (C1)", "Nemčina (A1)"],
    concepts: ["OOP", "Dátové štruktúry", "Algoritmy", "Operačné systémy"],
    softSkills: ["Analytické myslenie", "Rýchle učenie", "Tímová spolupráca"]
};

export const projects = [
    {
        id: 1,
        title: "Group Attendance Automation",
        description: "Desktopová aplikácia na spracovanie dochádzky a stravovacích požiadaviek väčších skupín, ktorá nahradila manuálne spracovanie v tabuľkách. Integruje parsovanie dát z Google Sheets API vrátane filtrovania chýbnych záznamov.",
        techStack: ["Python", "CustomTkinter", "Google Sheets API"],
        link: "https://github.com/adam-martonik/attendance-automation-showcase",
        buttonText: "GitHub 🔗"
    },
    {
        id: 2,
        title: "Job Alert Scraper",
        description: "Skript, ktorý denne prehľadáva profesia.sk a posiela HTML súhrn nových študentských a junior pozícií na e-mail. Implementuje filtrovanie podľa kľúčových slov, sledovanie firiem a deduplikáciu cez perzistentný JSON stav bez ukladania credentials v kóde.",
        techStack: ["Python", "Requests", "BeautifulSoup", "SMTP"],
        link: "https://github.com/adam-martonik/email_jobs",
        buttonText: "GitHub 🔗"
    },
    {
        id: 3,
        title: "Budget Planner",
        description: "Desktopová aplikácia na správu osobných financií v čistej Jave bez externých knižníc. Využíva čistý dátový model oddelený od UI vrstvy a ukladanie dát cez Java serializáciu.",
        techStack: ["Java", "Gradle"],
        link: "https://github.com/adam-martonik/budget",
        buttonText: "GitHub 🔗"
    },
    {
        id: 4,
        title: "Self-Diagnostic Kiosk (Hack jak Brno)",
        description: "Prototyp samoobslužného diagnostického kiosku pre lekárne – od identifikácie pacienta po doručenie výsledkov. Obsahuje Flask backend s REST API pre zariadenie, generovanie PDF a mock integrácie.",
        techStack: ["Python", "Flask", "JavaScript", "REST API"],
        link: "https://self-diagnostics-u2hg.onrender.com/",
        buttonText: "Pozrieť web 🔗"
    }
];

export const experience = [
    {
        id: 1,
        title: "Brigádnik v autopožičovni",
        company: "AT Car SK, s. r. o.",
        period: "Júl 2024 - súčasnosť",
        tasks: [
            "práca s interným systémom spoločnosti",
            "administratíva, evidencia dokumentov a zmlúv",
            "komunikácia so zákazníkmi"
        ]
    },
    {
        id: 2,
        title: "Čašník",
        company: "U Troch ruží",
        period: "August 2023 - August 2024",
        tasks: [
            "komunikácia so zákazníkmi",
            "riešenie problémových situácií",
            "práca v rýchlom a stresovom prostredí"
        ]
    },
    {
        id: 3,
        title: "Pokladník",
        company: "DEKORT, spol. s r.o.",
        period: "Október 2022 - Marec 2023",
        tasks: [
            "obsluha pokladne a práca s hotovosťou",
            "starostlivosť o zákazníkov",
            "zodpovednosť za presnosť transakcií"
        ]
    }
];