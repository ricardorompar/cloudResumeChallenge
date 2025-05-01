import React from 'react';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Custom components:
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Landing from './components/Landing';
//Resources:
import RRNavbar from './components/RRNavbar';

function App() {

    const [showPages, setShowPages] = useState(false);

    return (
        <main>
            <Router>
                <>
                    {showPages ? (
                        <div>
                            <RRNavbar></RRNavbar>
                            <Routes>
                                <Route path="/" element={<Landing setShowPages={setShowPages}/>} />
                                <Route path="/resume" element={<Resume />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </div>
                    ) : (
                        <Landing setShowPages={setShowPages} />
                    )}
                </>
            </Router>
            <Footer></Footer>
        </main>
    );
}

export default App;