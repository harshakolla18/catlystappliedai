import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const navItems = [
    {
        label: 'Services',
        featured: { label: 'All Services', path: '/#services' },
        columns: [
            {
                heading: 'Consulting',
                links: [
                    { label: 'Discovery & Diagnostic', path: '/ServiceDetail?service=discovery-diagnostic' },
                    { label: 'Training & Enablement', path: '/ServiceDetail?service=training-support' },
                ]
            },
            {
                heading: 'Engineering',
                links: [
                    { label: 'Custom AI Solutions', path: '/ServiceDetail?service=custom-ai-solutions' },
                    { label: 'Data Engineering', path: '/ServiceDetail?service=data-engineering' },
                    { label: 'AI Tools Implementation', path: '/ServiceDetail?service=ai-implementation' },
                ]
            },
            {
                heading: 'Automation',
                links: [
                    { label: 'Workflow Automation', path: '/ServiceDetail?service=workflow-automation' },
                ]
            }
        ]
    },
    {
        label: 'Products',
        featured: { label: 'Products overview', path: '/Products' },
        columns: [
            {
                heading: 'Platforms',
                links: [
                    { label: 'CAAi Command Center', path: '/Products' },
                    { label: 'CAAi CLERK', path: '/Products' },
                ]
            },
            {
                heading: 'Models',
                links: [
                    { label: 'Catalyst Custom Models', path: '/Products' },
                ]
            }
        ]
    },
    { label: 'Contact', path: '/Contact' }
];

function MegaDropdown({ item, onClose }) {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef(null);

    const handleEnter = () => {
        clearTimeout(timeoutRef.current);
        setOpen(true);
    };

    const handleLeave = () => {
        timeoutRef.current = setTimeout(() => setOpen(false), 200);
    };

    if (!item.columns) {
        return (
            <Link
                to={item.path}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium py-2"
                onClick={onClose}
            >
                {item.label}
            </Link>
        );
    }

    return (
        <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <button
                className={`flex items-center gap-1.5 text-sm font-medium py-2 transition-colors ${open ? 'text-white' : 'text-slate-300 hover:text-white'}`}
                onClick={() => setOpen(!open)}
            >
                {item.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="fixed left-0 right-0 top-20 z-50"
                    >
                        <div className="bg-[#0a0e1a] border-b border-blue-500/10">
                            <div className="max-w-7xl mx-auto px-4 py-10">
                                {/* Featured link */}
                                {item.featured && (
                                    <div className="mb-8">
                                        <Link
                                            to={item.featured.path}
                                            className="inline-flex items-center gap-2 group"
                                            onClick={() => { setOpen(false); onClose?.(); }}
                                        >
                                            <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                                {item.featured.label}
                                            </span>
                                            <span className="w-7 h-7 rounded bg-blue-500 flex items-center justify-center group-hover:bg-blue-400 transition-colors">
                                                <ChevronRight className="w-4 h-4 text-white" />
                                            </span>
                                        </Link>
                                    </div>
                                )}

                                {/* Columns */}
                                <div className="grid grid-cols-3 gap-12">
                                    {item.columns.map((col) => (
                                        <div key={col.heading}>
                                            <h4 className="text-slate-500 text-sm font-medium mb-4">{col.heading}</h4>
                                            <ul className="space-y-3">
                                                {col.links.map((link) => (
                                                    <li key={link.label}>
                                                        <Link
                                                            to={link.path}
                                                            className="text-slate-300 hover:text-white text-[15px] transition-colors"
                                                            onClick={() => { setOpen(false); onClose?.(); }}
                                                        >
                                                            {link.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Navbar({ showNav }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const allMobileLinks = (item) => {
        if (!item.columns) return [];
        return item.columns.flatMap(col => col.links);
    };

    return (
        <AnimatePresence>
            {showNav && (
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#060a14]/90 backdrop-blur-lg border-b border-blue-500/10' : 'bg-transparent'
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
                                    <MegaDropdown key={item.label} item={item} />
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="hidden md:block">
                                <Button
                                    onClick={() => window.location.href = 'mailto:sales@catalystappliedai.com?subject=Request%20for%20Information'}
                                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl px-6"
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
                                className="md:hidden bg-[#060a14]/95 backdrop-blur-lg border-b border-blue-500/10"
                            >
                                <div className="px-4 py-4 space-y-1">
                                    {navItems.map((item) => (
                                        <div key={item.label}>
                                            {item.columns ? (
                                                <>
                                                    <button
                                                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                                                        className="flex items-center justify-between w-full text-left text-slate-300 hover:text-white transition-colors py-3"
                                                    >
                                                        {item.label}
                                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                                                    </button>
                                                    <AnimatePresence>
                                                        {mobileExpanded === item.label && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="pl-4 pb-2 space-y-1 border-l border-blue-500/15 ml-2">
                                                                    {allMobileLinks(item).map((link) => (
                                                                        <Link
                                                                            key={link.label}
                                                                            to={link.path}
                                                                            className="block text-slate-400 hover:text-blue-400 transition-colors py-2 text-sm"
                                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                                        >
                                                                            {link.label}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </>
                                            ) : (
                                                <Link
                                                    to={item.path}
                                                    className="block w-full text-left text-slate-300 hover:text-blue-400 transition-colors py-3"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                    <div className="pt-3">
                                        <Button
                                            onClick={() => window.location.href = 'mailto:sales@catalystappliedai.com?subject=Request%20for%20Information'}
                                            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl"
                                        >
                                            Book ROI Assessment
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
