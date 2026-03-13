import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Cpu, Menu, X } from 'lucide-react';

export default function Navbar({ showNav }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Services', path: '/#services' },
        // { label: 'About', path: '/About' },
        { label: 'Contact', path: '/#contact' }
    ];

    return (
        <AnimatePresence>
            {showNav && (
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1a1f2e]/90 backdrop-blur-lg border-b border-slate-700/50' : 'bg-transparent'
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center justify-between h-20">
                            {/* Logo */}
                            <Link to="/" className="flex items-center gap-3 group">
                                <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <img src="/logo.jpg" alt="Catalyst Applied AI" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xl font-bold text-white hidden sm:block">
                                    Catalyst Applied AI
                                </span>
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center gap-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.path}
                                        className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="hidden md:block">
                                <Button
                                    onClick={() => window.location.href = 'mailto:sales@catalystappliedai.com?subject=Request%20for%20Information'}
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl px-6"
                                >
                                    Book ROI Assessment
                                </Button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 text-white"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="md:hidden bg-[#1a1f2e]/95 backdrop-blur-lg border-b border-slate-700/50"
                            >
                                <div className="px-4 py-4 space-y-4">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.label}
                                            to={item.path}
                                            className="block w-full text-left text-slate-300 hover:text-teal-400 transition-colors py-2"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                    <Button
                                        onClick={() => window.location.href = 'mailto:sales@catalystappliedai.com?subject=Request%20for%20Information'}
                                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl"
                                    >
                                        Book ROI Assessment
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
