import React from 'react';
import { education } from '../data/data';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
    return (
        <section id="education" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center max-w-xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
                        Vzdelanie
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base">
                        Akademické zázemie v odbore informatika a bilingválne vzdelanie.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {education.map((edu) => (
                        <div
                            key={edu.id}
                            className="bg-slate-900/50 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300"
                        >
                            <div className="w-13 h-13 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0 text-sky-400">
                                <GraduationCap size={28} />
                            </div>

                            <div className="flex-grow space-y-1">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="text-xl font-bold text-slate-100">{edu.field}</h3>
                                </div>
                                <p className="text-slate-300 font-medium text-base">{edu.school}</p>
                                {edu.highlights && (
                                    <p className="text-xs md:text-sm text-slate-400 pt-1">
                                        <span className="text-sky-400 font-medium">Zameranie:</span> {edu.highlights}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col sm:items-end gap-1.5 flex-shrink-0">
                                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700/60">
                                    <Calendar size={13} /> {edu.period}
                                </div>
                                <div className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                                    <MapPin size={11} /> {edu.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
