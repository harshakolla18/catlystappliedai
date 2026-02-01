import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Cpu } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 px-4 bg-[#1a1f2e] border-t border-slate-700/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <Link to={createPageUrl('Home')} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                        <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
                            <img src="/logo.jpg" alt="Catalyst Applied AI" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xl font-bold text-white">
                            Catalyst Applied AI
                        </span>
                    </Link>

                    {/* Copyright */}
                    <div className="text-slate-400 text-sm">
                        Copyright © {new Date().getFullYear()} Catalyst Applied AI - All Rights Reserved.
                    </div>

                    {/* Footer Links */}
                    <div className="flex items-center gap-4">
                        <Link
                            to={createPageUrl('About')}
                            className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                        >
                            About
                        </Link>
                        <span className="text-slate-700">|</span>
                        <a
                            href="mailto:sales@catalystappliedai.com"
                            className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                        >
                            Contact
                        </a>
                        <span className="text-slate-700">|</span>
                        <a
                            href="#"
                            className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
