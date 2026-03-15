import React from 'react';
import Navbar from '../components/home/Navbar';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/home/Footer';

export default function Contact() {
    return (
        <div className="min-h-screen bg-[#060a14]">
            <Navbar showNav={true} />
            <ContactSection />
            <Footer />
        </div>
    );
}
