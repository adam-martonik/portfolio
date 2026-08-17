import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';
import { Mail, Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-6 relative pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center max-w-3xl"
            >
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-50 mb-6 tracking-tight">
                    Ahoj, som <span className="text-sky-400">{personalInfo.name}</span>
                </h1>

                <h2 className="text-2xl md:text-3xl text-slate-400 mb-8 font-medium">
                    Študent informatiky na TUKE & vývojár
                </h2>

                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Venujem sa najmä programovaniu a okrem toho aj  aktívne tancujem vo Folklórnom súbore Železiar, hrám futbal a momentálne zbieram skúsenosti aj ako brigádnik v autopožičovni.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/25">
                        <Mail size={20} /> Napíš mi
                    </a>
                    <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-50 border border-slate-700 font-medium rounded-xl transition-all hover:-translate-y-1">
                        <Phone size={20} /> {personalInfo.phone}
                    </a>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 text-slate-500"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}