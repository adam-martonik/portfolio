import React from 'react';
import { personalInfo } from '../data/data';

function Hero() {
    return (
        <section style={styles.section} id="about">
            <div className="container" style={styles.container}>
                <h1 style={styles.heading}>Ahoj,som {personalInfo.name} 👋</h1>
                <h2 style={styles.subheading}>Študent informatiky</h2>
                <p style={styles.bio}>{personalInfo.about}</p>

                <div style={styles.contact}>
                    <a href={`mailto:${personalInfo.email}`} style={styles.link}>
                        📧 Napíš mi
                    </a>
                    <a href={`tel:${personalInfo.phone}`} style={styles.link}>
                        📱 {personalInfo.phone}
                    </a>
                </div>
            </div>
        </section>
    );
}

// Jednoduché štýlovanie priamo v komponente pre rýchly štart
const styles = {
    section: { padding: '120px 0 80px', backgroundColor: '#0B1120', borderBottom: '1px solid #1e293b' },
    container: { textAlign: 'center', maxWidth: '800px' },
    heading: { fontSize: '3.5rem', marginBottom: '10px', color: '#f8fafc' },
    subheading: { fontSize: '1.5rem', color: '#38bdf8', marginBottom: '20px', fontWeight: 'normal' },
    bio: { fontSize: '1.1rem', color: '#94a3b8', marginBottom: '30px' },
    contact: { display: 'flex', justifyContent: 'center', gap: '20px' },
    link: { padding: '10px 20px', backgroundColor: '#38bdf8', color: '#0B1120', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }
};
export default Hero;