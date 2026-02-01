import React, { useState, useEffect } from 'react';
import Navbar from '../components/home/Navbar';
import ScrollMorphHero from '../components/ui/scroll-morph-hero';
import HeroSection from '../components/home/HeroSection';
import ServicesAccordion from '../components/home/ServicesAccordion';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/home/Footer';

export default function Home() {
    const [showNav, setShowNav] = useState(false);
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        // Check if intro has been shown before
        const introShown = sessionStorage.getItem('introShown');
        // Skip intro if we've seen it OR if we are deep-linking to a section
        if (introShown || window.location.hash) {
            setShowIntro(false);
        }

        // Show navbar after a short delay for smooth entry
        const timer = setTimeout(() => setShowNav(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleIntroComplete = () => {
        sessionStorage.setItem('introShown', 'true');
        setShowIntro(false);
    };

    return (
        <div className="min-h-screen bg-[#1a1f2e]">
            {/* Navbar */}
            <Navbar showNav={showNav} />

            {/* Intro Animation */}
            {showIntro && (
                <div className="h-screen w-full">
                    <ScrollMorphHero onScrollComplete={handleIntroComplete} />
                </div>
            )}

            {/* Hero Section */}
            {!showIntro && <HeroSection />}

            {/* Services Section */}
            {!showIntro && <ServicesAccordion />}

            {/* About Section */}
            {!showIntro && (
                <div id="about">
                    <AboutSection />
                </div>
            )}

            {/* Contact Section */}
            {!showIntro && <ContactSection />}

            {/* Footer */}
            {!showIntro && <Footer />}
        </div>
    );
}
