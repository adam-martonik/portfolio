export const personalInfo = {
    name: "Martonik",
    fullName: "Adam Martonik",
    role: "Software Developer & Študent informatiky na TUKE",
    intro: "Som študent informatiky na TUKE so záujmom o vývoj moderného softvéru. Momentálne pôsobím ako lektor programovania pre deti v IT – svet mladých, o.z. a popritom pracujem v autopožičovni AT Car SK. Vo voľnom čase aktívne tancujem vo Folklórnom súbore Železiar a sledujem Formulu 1.",
    email: "work.martonik@gmail.com",
    personalEmail: "adamko.martonik@gmail.com",
    phone: "+421 910 421 244",
    location: "Košice, Slovensko",
    workplaces: [
        {
            role: "Lektor programovania pre deti",
            company: "IT – svet mladých, o.z.",
            desc: "Výučba základov algoritmizácie a logiky cez Code.org"
        },
        {
            role: "Brigádnik",
            company: "AT Car SK, s. r. o.",
            desc: "Správa dát, interný systém a komunikácia s klientmi"
        }
    ],
    github: "https://github.com/adam-martonik",
    linkedin: "https://www.linkedin.com/in/adam-martonik-567a89385/",
};

export const projects = [
    {
        id: 1,
        title: "KlubManager SaaS",
        subtitle: "Multi-tenant platforma pre kluby a súbory",
        description: "Multi-tenant mikro-SaaS platforma s dátovou izoláciou v PostgreSQL cez Hibernate 6 @TenantId, bezstavovou JWT autentifikáciou (Spring Security 6), vlastnou binárnou implementáciou slovenského Pay by Square (SBA LZMA/Base32Hex/ZXing), automatickým párovaním SEPA CAMT.053 XML bankových výpisov a offline PWA dochádzkou.",
        techStack: ["Java 21", "Spring Boot 3.4", "React 18", "TypeScript", "PostgreSQL", "Docker Compose", "PWA"],
        link: "https://github.com/adam-martonik/klubmanager-showcase",
        buttonText: "GitHub repozitár",
        highlighted: true
    },
    {
        id: 2,
        title: "Vulnerability Lookup",
        subtitle: "Osobný bezpečnostný sieťový audítor",
        description: "Defenzívny auditovací nástroj v Pythone pre lokálne siete s bezpečnostnou ochranou RFC 1918 Private Network Guard. Vykonáva pasívny banner grabbing, mapovanie na CPE 2.3, asynchrónne vyhľadávanie CVE zraniteľností a CVSS skóre cez CIRCL VLOOKUP a NIST NVD v2.0 API, s lokálnou SQLite TTL cache a interaktívnym HTML reportom.",
        techStack: ["Python 3.11+", "Network Security", "CIRCL VLOOKUP", "NIST NVD", "SQLite", "CVSS 3.1"],
        link: "https://github.com/adam-martonik/Vulnerability_Lookup_Personal_network",
        buttonText: "GitHub repozitár",
        highlighted: true
    },
    {
        id: 3,
        title: "Self-Diagnostic Kiosk (Hack jak Brno)",
        subtitle: "Samoobslužný diagnostický kiosk pre lekárne",
        description: "Prototyp samoobslužného diagnostického kiosku pre lekárne vytvorený na 24-hodinovom súťažnom hackathone. Flask backend s REST API pre hardware, pseudonymizácia údajov pacienta (GDPR-compliant) a dynamické generovanie lekárskych reportov do PDF s nasadením na Render.",
        techStack: ["Python", "Flask", "JavaScript", "REST API", "ReportLab", "Render"],
        link: "https://self-diagnostics-u2hg.onrender.com/",
        buttonText: "Živé demo",
        highlighted: false
    },
    {
        id: 4,
        title: "Group Attendance Automation",
        subtitle: "Automatizácia spracovania skupinovej dochádzky",
        description: "Desktopová aplikácia na spracovanie dochádzky a stravovacích požiadaviek väčších skupín, ktorá nahradila manuálne tabuľky. Integruje automatické parsovanie dát z Google Sheets API vrátane filtrovania chybných záznamov.",
        techStack: ["Python", "CustomTkinter", "Google Sheets API"],
        link: "https://github.com/adam-martonik/attendance-automation-showcase",
        buttonText: "GitHub repozitár",
        highlighted: false
    },
    {
        id: 5,
        title: "Job Alert Scraper",
        subtitle: "Automatizovaný scraper pracovných ponúk",
        description: "Skript, ktorý pravidelne prehľadáva profesia.sk a posiela HTML súhrn nových študentských a junior pozícií na e-mail. Implementuje filtrovanie podľa kľúčových slov, sledovanie firiem a deduplikáciu cez perzistentný JSON stav.",
        techStack: ["Python", "Requests", "BeautifulSoup", "SMTP"],
        link: "https://github.com/adam-martonik/email_jobs",
        buttonText: "GitHub repozitár",
        highlighted: false
    },
    {
        id: 6,
        title: "Budget Planner",
        subtitle: "Správa osobných financií v čistej Jave",
        description: "Desktopová aplikácia na správu osobných financií v čistej Jave bez externých knižníc. Využíva čistý dátový model oddelený od UI vrstvy a ukladanie dát cez Java serializáciu.",
        techStack: ["Java", "Gradle"],
        link: "https://github.com/adam-martonik/budget",
        buttonText: "GitHub repozitár",
        highlighted: false
    }
];
