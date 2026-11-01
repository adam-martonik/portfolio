import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-sky-500/30 selection:text-sky-200">
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <Skills />
                <Experience />
                <Education />
            </main>
            <Footer />
        </div>
    );
}

export default App;
