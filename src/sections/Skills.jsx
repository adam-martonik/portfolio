import React from 'react';
import { skills } from '../data/data';
import { Server, Layout, ShieldAlert, Cpu, Globe } from 'lucide-react';

export default function Skills() {
    const categories = [
        {
            title: 'Backend & Architektúra',
            icon: Server,
            items: skills.backend,
            color: 'from-sky-500/20 to-blue-600/10',
            borderColor: 'group-hover:border-sky-500/40',
            tagStyle: 'bg-sky-500/10 text-sky-300 border-sky-500/25'
        },
        {
            title: 'Frontend & PWA',
            icon: Layout,
            items: skills.frontend,
            color: 'from-cyan-500/20 to-teal-600/10',
            borderColor: 'group-hover:border-cyan-500/40',
            tagStyle: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25'
        },
        {
            title: 'Security, Databázy & Nástroje',
            icon: ShieldAlert,
            items: skills.securityAndTools,
            color: 'from-indigo-500/20 to-purple-600/10',
            borderColor: 'group-hover:border-indigo-500/40',
            tagStyle: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/25'
        },
        {
            title: 'Inžinierske Koncepty',
            icon: Cpu,
            items: skills.concepts,
            color: 'from-slate-800 to-slate-900',
            borderColor: 'group-hover:border-slate-600',
            tagStyle: 'bg-slate-800/80 text-slate-300 border-slate-700/60'
        }
    ];

    return (
        <section id="skills" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
                        Technologický Stack
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base">
                        Technológie, rámce a princípy, ktoré aktívne využívam pri návrhu a implementácii softvéru.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <div
                                key={idx}
                                className={`group bg-slate-900/50 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${cat.borderColor} flex flex-col justify-between`}
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/80">
                                        <div className="p-2 rounded-xl bg-slate-800 text-sky-400 group-hover:scale-110 transition-transform">
                                            <Icon size={20} />
                                        </div>
                                        <h3 className="text-base font-bold text-slate-200">
                                            {cat.title}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {cat.items?.map((item, i) => (
                                            <span
                                                key={i}
                                                className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${cat.tagStyle}`}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Languages highlight */}
                <div className="mt-8 p-5 bg-slate-900/30 border border-slate-800/70 rounded-2xl max-w-xl mx-auto flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-slate-300">
                    <div className="flex items-center gap-2 text-sky-400 font-semibold">
                        <Globe size={16} /> Jazyková vybavenosť:
                    </div>
                    {skills.languages?.map((lang, index) => (
                        <span key={index} className="px-3 py-1 bg-slate-800/80 rounded-full border border-slate-700/60 font-medium">
                            {lang}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
