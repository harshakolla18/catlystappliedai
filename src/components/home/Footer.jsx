import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 px-4 bg-[#1a1f2e] border-t border-slate-700/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo & Description */}
                    <div className="md:col-span-1">
                        <Link to={createPageUrl('Home')} className="flex items-center gap-3 hover:opacity-90 transition-opacity mb-4">
                            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
                                <img src="/logo.jpg" alt="Catalyst Applied AI" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xl font-bold text-white">
                                Catalyst Applied AI
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm">
                            Practical AI solutions that deliver real business results.
                        </p>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to={createPageUrl('ServiceDetail') + '?service=discovery-diagnostic'} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                                    Discovery & Diagnostic
                                </Link>
                            </li>
                            <li>
                                <Link to={createPageUrl('ServiceDetail') + '?service=custom-ai-solutions'} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                                    Custom AI Solutions
                                </Link>
                            </li>
                            <li>
                                <Link to={createPageUrl('ServiceDetail') + '?service=workflow-automation'} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                                    Workflow Automation
                                </Link>
                            </li>
                            <li>
                                <Link to={createPageUrl('ServiceDetail') + '?service=data-engineering'} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                                    Data Engineering
                                </Link>
                            </li>
                            <li>
                                <Link to={createPageUrl('ServiceDetail') + '?service=ai-implementation'} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                                    AI Tools Implementation
                                </Link>
                            </li>
                            <li>
                                <Link to={createPageUrl('ServiceDetail') + '?service=training-support'} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                                    Training & Enablement
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to={createPageUrl('Home')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={createPageUrl('About')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to={createPageUrl('TermsAndConditions')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:sales@catalystappliedai.com" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    sales@catalystappliedai.com
                                </a>
                            </li>
                            <li className="text-slate-400 text-sm flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                                Kentucky, USA
                            </li>
                        </ul>
                        
                    </div>
                </div>

                {/* NVIDIA Inception Partner Badge */}
                <div className="flex justify-center my-8">
                    <div className="flex items-center bg-black rounded-lg overflow-hidden">
                        {/* Company Logo Side */}
                        <div className="flex items-center justify-center px-4 py-3 bg-black">
                            <img src="/logo.jpg" alt="Catalyst Applied AI" className="h-10 object-contain" />
                        </div>
                        {/* NVIDIA Badge Side */}
                        <div className="bg-white px-4 py-3">
                            <img 
                                src="/nvidia-inception-badge.png" 
                                alt="Member of NVIDIA Inception" 
                                className="h-10 object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Copyright & Legal */}
                <div className="pt-8 border-t border-slate-800 text-center">
                    <p className="text-slate-400 text-sm">
                        Copyright © {new Date().getFullYear()} Catalyst Applied AI - All Rights Reserved.
                    </p>
                    <p className="text-slate-500 text-xs mt-2">
                        © {new Date().getFullYear()} NVIDIA, the NVIDIA logo, and NVIDIA Inception are trademarks and/or registered trademarks of NVIDIA Corporation in the U.S. and other countries.
                    </p>
                </div>
            </div>
        </footer>
    );
}
