# Martoník — Osobné Portfólio & Softvérové Projekty

<p align="center">
  <a href="https://adam-martonik.github.io/portfolio">
    <img src="https://img.shields.io/badge/Live_Demo-adam--martonik.github.io%2Fportfolio-38bdf8?style=for-the-badge&logo=googlechrome&logoColor=black" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/CI%2FCD-GitHub_Pages-22c55e?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Pages CI" />
</p>

---

## 👨‍💻 O mne

Ahoj! Som **Martoník**, študent informatiky na **Technickej univerzite v Košiciach (TUKE)** so zameraním na vývoj softvéru, backend a sieťovú bezpečnosť. 

- 🚀 **Kde momentálne pôsobím:**
  - **Lektor programovania pre deti** v *IT – svet mladých, o.z.* (výučba algoritmizácie a logiky cez Code.org).
  - **Brigádnik** v *AT Car SK, s. r. o.* (správa zmlúv, interný systém a komunikácia s klientmi).
- 🎭 **Záujmy:** Aktívny tanečník vo **Folklórnom súbore Železiar** a fanúšik **Formuly 1**.

🌐 **[Otvoriť živé portfólio na webe →](https://adam-martonik.github.io/portfolio)**

---

## ⭐ Hlavné softvérové projekty (Top Highlighty)

### 1. [KlubManager SaaS](https://github.com/adam-martonik/app_for_groups) — Multi-tenant platforma pre kluby a súbory
* **Stack:** `Java 21`, `Spring Boot 3.4`, `React 18`, `TypeScript`, `PostgreSQL`, `Docker Compose`, `PWA`
* **Kľúčové vlastnosti:**
  - Multi-tenancy v PostgreSQL s izoláciou dát na úrovni databázy cez Hibernate 6 `@TenantId`.
  - Vlastná binárna implementácia slovenského bankového štandardu **Pay by Square** podľa SBA špecifikácie (CRC32 $\rightarrow$ LZMA $\rightarrow$ Base32Hex $\rightarrow$ QR kód).
  - Automatické párovanie platieb z bankových výpisov **SEPA XML (camt.053)** a CSV.
  - Obojsmerná integrácia s Google Sheets API a offline PWA dochádzka. Kompletná dokumentácia podľa Waterfall metodiky (SRS, SDD, Test Plan).

---

### 2. [Vulnerability Lookup](https://github.com/adam-martonik/Vulnerability_Lookup_Personal_network) — Osobný bezpečnostný sieťový audítor
* **Stack:** `Python 3.11+`, `Sockets`, `CIRCL VLOOKUP API`, `NIST NVD v2.0`, `SQLite`, `CVSS 3.1`
* **Kľúčové vlastnosti:**
  - Defenzívny audit lokálnych sietí chránený validátorom **RFC 1918 Private Network Guard**.
  - Pasívny service banner grabbing s mapovaním na štandardizované CPE 2.3 formáty.
  - Asynchrónne vyhľadávanie CVE a CVSS skóre cez CIRCL VLOOKUP a NIST NVD API s lokálnou SQLite TTL cache.
  - Generovanie interaktívneho HTML dashboardu pre vizualizáciu bezpečnostného stavu sieťových zariadení.

---

## 🛠️ Lokálne spustenie projektu

```bash
# 1. Klonovanie repozitára
git clone https://github.com/adam-martonik/portfolio.git
cd portfolio

# 2. Inštalácia závislostí
npm install --legacy-peer-deps

# 3. Spustenie lokálneho vývojového servera
npm run dev
```

Aplikácia sa automaticky nasadzuje na **GitHub Pages** pri každom pushe do vetvy `main` pomocou GitHub Actions workflowu.

---

<p align="center">
  <b>Adam Martoník</b> &bull; Košice, Slovensko &bull; <a href="mailto:work.martonik@gmail.com">work.martonik@gmail.com</a>
</p>
