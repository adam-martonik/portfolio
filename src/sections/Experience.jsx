import React from 'react';
import { experience } from '../data/data';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center max-w-xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
                        Pracovné skúsenosti
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base">
                        Prax v mentoringu, tímovej práci, komunikácii s klientmi a administratíve.
                    </p>
                </div>

                <div className="relative pl-6 md:pl-8 border-l border-slate-800/80 space-y-10">
                    {experience.map((job) => (
                        <div key={job.id} className="relative group">
                            {/* Timeline Node Icon */}
                            <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-7 h-7 rounded-full bg-slate-900 border-2 border-sky-500/70 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:border-sky-400 group-hover:bg-sky-950/40 transition-all shadow-md shadow-sky-500/20">
                                <Briefcase size={13} />
                            </div>

                            {/* Job Card */}
                            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                                            {job.title}
                                        </h3>
                                        <p className="text-sky-400 font-medium text-sm">
                                            {job.company}
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/60">
                                        <Calendar size={12} /> {job.period}
                                    </span>
                                </div>

                                <ul className="space-y-2 mt-4 text-sm text-slate-300">
                                    {job.tasks.map((task, index) => (
                                        <li key={index} className="flex items-start gap-2.5 leading-relaxed">
                                            <CheckCircle2 size={15} className="text-sky-400/80 flex-shrink-0 mt-0.5" />
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
