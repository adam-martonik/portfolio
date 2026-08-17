import React from 'react';
import { education } from '../data/data';
import { GraduationCap } from 'lucide-react';

export default function Education() {
    return (
        <section id="education" className="py-24 bg-slate-950 relative border-t border-slate-800/50">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-50 mb-16">
                    Vzdelanie
                </h2>
                
                <div className="flex flex-col gap-6">
                    {education.map((edu) => (
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-slate-700 transition-colors" key={edu.id}>
                            
                            <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                                <GraduationCap className="text-sky-500" size={24} />
                            </div>
                            
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-slate-100 mb-1">{edu.field}</h3>
                                <p className="text-slate-400">{edu.school}</p>
                            </div>
                            
                            <div className="text-sm font-medium text-slate-300 bg-slate-800 px-4 py-2 rounded-full whitespace-nowrap">
                                {edu.period}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}