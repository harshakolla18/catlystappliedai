import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ChevronDown, Brain, Cpu, Network, Shield, Zap, BarChart3 } from 'lucide-react';

function FloatingNode({ icon: Icon, label, x, y, delay, size = 56 }) {
    return (
        <motion.div
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, type: "spring", stiffness: 100, damping: 15 }}
        >
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
            >
                <div
                    className="rounded-2xl bg-gradient-to-br from-[#0d1425]/90 to-[#080e1c]/90 border border-blue-500/15 backdrop-blur-sm flex flex-col items-center justify-center gap-1.5 shadow-xl shadow-black/40 hover:border-blue-400/30 transition-colors duration-500"
                    style={{ width: size, height: size }}
                >
                    <Icon className="w-5 h-5 text-blue-400" />
                    {label && <span className="text-[9px] text-slate-400 font-medium tracking-wide">{label}</span>}
                </div>
            </motion.div>
        </motion.div>
    );
}

function ConnectionLine({ x1, y1, x2, y2, delay }) {
    return (
        <motion.line
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ delay, duration: 1.5, ease: "easeInOut" }}
        />
    );
}

function Hero3DVisual() {
    return (
        <div className="relative w-full h-full min-h-[500px]">
            {/* Ambient glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/12 rounded-full blur-[100px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/3 left-1/3 w-48 h-48 bg-blue-500/8 rounded-full blur-[80px]"
                animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-500/8 rounded-full blur-[60px]"
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Connection lines SVG */}
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
                <ConnectionLine x1="50%" y1="45%" x2="15%" y2="15%" delay={1.2} />
                <ConnectionLine x1="50%" y1="45%" x2="82%" y2="12%" delay={1.4} />
                <ConnectionLine x1="50%" y1="45%" x2="10%" y2="70%" delay={1.6} />
                <ConnectionLine x1="50%" y1="45%" x2="85%" y2="65%" delay={1.8} />
                <ConnectionLine x1="50%" y1="45%" x2="50%" y2="88%" delay={2.0} />
            </svg>

            {/* Central brain node */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
            >
                <motion.div
                    animate={{ y: [0, -6, 0], rotate: [0, 2, 0, -2, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500/15 to-blue-700/15 border border-blue-400/25 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-blue-500/15 relative">
                        <Brain className="w-10 h-10 text-blue-400" />
                        {/* Pulse ring */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl border border-blue-400/20"
                            animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.div
                            className="absolute inset-0 rounded-3xl border border-blue-400/10"
                            animate={{ scale: [1, 1.8], opacity: [0.25, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                        />
                    </div>
                </motion.div>
            </motion.div>

            {/* Orbiting nodes */}
            <FloatingNode icon={Cpu} label="Models" x="8%" y="8%" delay={0.8} />
            <FloatingNode icon={Network} label="RAG" x="75%" y="5%" delay={1.0} />
            <FloatingNode icon={Shield} label="Trust" x="3%" y="62%" delay={1.2} />
            <FloatingNode icon={Zap} label="Auto" x="78%" y="58%" delay={1.4} />
            <FloatingNode icon={BarChart3} label="Analytics" x="40%" y="82%" delay={1.6} />

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-blue-400/40"
                    style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                        y: [0, -20 - Math.random() * 30, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                    }}
                />
            ))}

        </div>
    );
}

export default function HeroSection() {
    const benefits = [
        "Save on operational costs",
        "Automate repetitive workflows",
        "Data-driven decision making"
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060a14]">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-950/30 via-[#060a14] to-[#060a14] z-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060a14] z-10" />
            {/* Grid pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.025]" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Text */}
                    <div>
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/8 border border-blue-500/15 mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                            <span className="text-blue-300 text-sm font-medium">Where Intelligence Meets Execution</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
                        >
                            Unlock the Power of{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-400">
                                AI
                            </span>{' '}
                            for Your Business
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed"
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
                                    <CheckCircle className="w-5 h-5 text-blue-400" />
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
                                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/20 group"
                            >
                                Book Your Free ROI Assessment
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                className="border border-blue-500/20 bg-blue-500/8 hover:bg-blue-500/12 text-blue-300 hover:text-blue-200 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all"
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

                    {/* Right - 3D Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="hidden lg:block"
                    >
                        <Hero3DVisual />
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
                <button
                    type="button"
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group flex flex-col items-center gap-1.5 text-slate-500 hover:text-blue-400 transition-colors"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity }}
                        className="w-9 h-9 rounded-full border border-slate-700/60 bg-slate-900/40 flex items-center justify-center group-hover:border-blue-400/50"
                    >
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                </button>
            </motion.div>
        </section>
    );
}
