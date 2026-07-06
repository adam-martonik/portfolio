import React from 'react';
import { experience } from '../data/data';

function Experience() {
    return (
        <section style={styles.section} id="experience">
            <div className="container">
                <h2 style={styles.heading}>Pracovné skúsenosti</h2>
                <div style={styles.list}>
                    {experience.map((job) => (
                        <div key={job.id} style={styles.item}>
                            <div style={styles.header}>
                                <h3 style={styles.title}>{job.title}</h3>
                                <span style={styles.period}>{job.period}</span>
                            </div>
                            <h4 style={styles.company}>{job.company}</h4>
                            <ul style={styles.tasks}>
                                {job.tasks.map((task, index) => (
                                    <li key={index} style={styles.taskItem}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const styles = {
    section: { padding: '80px 0', backgroundColor: '#0f172a' },
    heading: { fontSize: '2rem', textAlign: 'center', marginBottom: '40px', color: '#f8fafc' },
    list: { maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' },
    item: { backgroundColor: '#0B1120', padding: '25px', borderRadius: '8px', borderLeft: '4px solid #38bdf8', border: '1px solid #1e293b', borderLeftWidth: '4px' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '5px' },
    title: { fontSize: '1.3rem', color: '#f8fafc' },
    period: { fontSize: '0.95rem', color: '#94a3b8', backgroundColor: '#1e293b', padding: '4px 10px', borderRadius: '15px' },
    company: { fontSize: '1.1rem', color: '#38bdf8', marginBottom: '15px', fontWeight: '500' },
    tasks: { listStyleType: 'disc', paddingLeft: '20px', color: '#cbd5e1' },
    taskItem: { marginBottom: '5px' }
};

export default Experience;