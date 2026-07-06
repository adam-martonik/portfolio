import React from 'react';
import { education } from '../data/data';

function Education() {
    return (
        <section style={styles.section} id="education">
            <div className="container">
                <h2 style={styles.heading}>Vzdelanie</h2>
                <div style={styles.list}>
                    {education.map((edu) => (
                        <div key={edu.id} style={styles.item}>
                            <div style={styles.header}>
                                <h3 style={styles.field}>{edu.field}</h3>
                                <span style={styles.period}>{edu.period}</span>
                            </div>
                            <p style={styles.school}>{edu.school}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const styles = {
    section: { padding: '80px 0', backgroundColor: '#0B1120' },
    heading: { fontSize: '2rem', textAlign: 'center', marginBottom: '40px', color: '#f8fafc' },
    list: { maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' },
    item: { padding: '20px', borderBottom: '1px solid #1e293b' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px' },
    field: { fontSize: '1.2rem', color: '#f8fafc', fontWeight: 'bold' },
    period: { fontSize: '0.9rem', color: '#94a3b8' },
    school: { fontSize: '1rem', color: '#cbd5e1' }
};

export default Education;