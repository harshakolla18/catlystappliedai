import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

export default function HeroSection() {
    const benefits = [
        "Save 40% on operational costs",
        "Automate repetitive workflows",
        "Data-driven decision making"
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1f2e]">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/30 via-[#1a1f2e] to-[#1a1f2e] z-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1f2e] z-10" />

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-cyan-400 text-sm font-medium">Where Intelligence Meets Execution</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
                    >
                        Unlock the Power of{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                            AI
                        </span>{' '}
                        for Your Business
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed"
                    >
                        We help organizations identify, design, and implement practical AI solutions
                        that drive real business value. Save time. Cut costs. Stay focused.
                    </motion.p>

                    {/* Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4 mb-10"
                    >
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-slate-300"
                            >
                                <CheckCircle className="w-5 h-5 text-cyan-400" />
                                <span className="text-sm sm:text-base">{benefit}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button
                            onClick={() => window.location.href = 'mailto:sales@catalystappliedai.com?subject=ROI%20Assessment%20Request'}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/25 group"
                        >
                            Book Your Free ROI Assessment
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/10 backdrop-blur-sm transition-all"
                        >
                            Explore Our Services
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-12 pt-8 border-t border-slate-800"
                    >
                        <p className="text-slate-500 text-sm mb-4">Trusted by forward-thinking companies</p>
                        <div className="flex items-center gap-8 opacity-60">
                            <div className="text-white font-semibold text-lg">Enterprise</div>
                            <div className="text-white font-semibold text-lg">Startups</div>
                            <div className="text-white font-semibold text-lg">SMBs</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-slate-500 flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
