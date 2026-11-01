import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';
import { Mail, Phone, ArrowDown, Sparkles, MapPin } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export default function Hero() {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-6 relative pt-28 pb-16 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/3 right-1/4 w-[350px] h-[250px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center max-w-3xl z-10"
            >
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs md:text-sm text-slate-300 mb-8 backdrop-blur-md shadow-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Študent TUKE \textbar\ Vývojár pripravený na nové výzvy</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-50 mb-5 tracking-tight">
                    Ahoj, som <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400">{personalInfo.name}</span>
                </h1>

                <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-medium flex items-center justify-center gap-2">
                    Študent informatiky na TUKE & vývojár
                </h2>

                <p className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Venujem sa najmä programovaniu a okrem toho aj aktívne tancujem vo Folklórnom súbore Železiar, hrám futbal a momentálne zbieram skúsenosti aj ako brigádnik v autopožičovni.
                </p>

                {/* Call to Actions */}
                <div className="flex flex-wrap justify-center items-center gap-3.5 mb-12">
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/25 text-sm md:text-base cursor-pointer"
                    >
                        <Mail size={18} /> Napíš mi
                    </a>
                    <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium rounded-xl transition-all hover:-translate-y-0.5 text-sm md:text-base"
                    >
                        <Phone size={18} /> {personalInfo.phone}
                    </a>
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800/60 hover:bg-slate-800 text-sky-400 border border-slate-700/60 font-medium rounded-xl transition-all hover:-translate-y-0.5 text-sm md:text-base"
                    >
                        <Sparkles size={18} /> Projekty
                    </a>
                </div>

                {/* Key Quick Facts Pill Strip */}
                <div className="inline-flex flex-wrap justify-center items-center gap-2.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900/60 rounded-lg border border-slate-800/60">
                        <MapPin size={13} className="text-sky-400" /> Košice, Slovensko
                    </span>
                    <span className="px-3 py-1 bg-slate-900/60 rounded-lg border border-slate-800/60 text-slate-300">
                        🎓 TUKE Informatika (Bc.)
                    </span>
                    <span className="px-3 py-1 bg-slate-900/60 rounded-lg border border-slate-800/60 text-slate-300">
                        🇬🇧 Angličtina C1 (Bilingválne gymnázium)
                    </span>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.a
                href="#projects"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                className="absolute bottom-6 text-slate-500 hover:text-sky-400 transition-colors p-2"
                aria-label="Scroll na projekty"
            >
                <ArrowDown size={24} />
            </motion.a>
        </section>
    );
}
