import React, { useState, useEffect } from 'react';
import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/HeroSection';
import ServicesAccordion from '../components/home/ServicesAccordion';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/home/Footer';

export default function Home() {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        // Show navbar after a short delay for smooth entry
        const timer = setTimeout(() => setShowNav(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#060a14]">
            {/* Navbar */}
            <Navbar showNav={showNav} />

            {/* Hero Section */}
            <HeroSection />

            {/* Services Section */}
            <ServicesAccordion />

            {/* About Section */}
            <div id="about">
                <AboutSection />
            </div>

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <Footer />
        </div>
    );
}
