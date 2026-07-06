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
        title: "Self-Diagnostic Kiosk Interface",
        description: "Webová aplikácia vytvorená na hackathone Hack jak Brno.",
        techStack: ["JavaScript", "HTML/CSS", "Git"],
        link: "https://self-diagnostics-u2hg.onrender.com/"
    },
    {
        id: 2,
        title: "Budget Planner",
        description: "Java aplikácia pre plánovanie financií.",
        techStack: ["Java", "Git"],
        link: "https://github.com/adam-martonik/budget/"
    },
    {
        id: 3,
        title: "Network Security Audit Tool",
        description: "Aplikácia pre bezpečnostný audit sietí s integráciou na CIRCL vulnerability API.",
        techStack: ["Java", "Spring Boot", "Hibernate"],
        link: "#" // Sem neskôr doplň link
    },
    {
        id: 4,
        title: "Kakuro Game",
        description: "Logická hra Kakuro postavená na MVC architektúre s webovým rozhraním.",
        techStack: ["Java", "Spring Boot", "Thymeleaf"],
        link: "#" // Sem neskôr doplň link
    },
    {
        id: 5,
        title: "Group Attendance Automation",
        description: "Nástroj v Pythone na automatizáciu dochádzky s grafickým rozhraním, triedením skupín a evidenciou diétnych požiadaviek.",
        techStack: ["Python", "CustomTkinter", "Google Sheets"],
        link: "#" // Sem neskôr doplň link
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