import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';

function App() {
    return (
        <div>
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <Experience />
                <Education />
            </main>

            <footer style={{ textAlign: 'center', padding: '30px', backgroundColor: '#0B1120', color: '#94a3b8', borderTop: '1px solid #1e293b' }}>
                <p>© 2026 Adam Martonik. Vytvorené v Reacte.</p>
            </footer>
        </div>
    );
}

export default App;