import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Zap, Target, TrendingUp, Users, ArrowRight } from 'lucide-react';

const capabilities = [
    {
        icon: Zap,
        title: "Automation",
        description: "Removing bottlenecks and streamlining operations"
    },
    {
        icon: Users,
        title: "Customer Experience",
        description: "Enhancing interactions at scale"
    },
    {
        icon: TrendingUp,
        title: "Data Intelligence",
        description: "Turning information into decisions"
    },
    {
        icon: Target,
        title: "Operational Efficiency",
        description: "Reducing costs and increasing speed"
    }
];

export default function AboutSection() {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-slate-900/50 to-[#1a1f2e] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
                            Who We Are
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">AI Solutions</span>
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            Catalyst Applied AI helps organizations identify, design, and implement practical AI solutions.
                            We bridge the gap between potential and performance, unlocking opportunities that drive real business value.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                                <div className="text-3xl font-bold text-cyan-400">100+</div>
                                <div className="text-sm text-slate-400 mt-1">Projects Delivered</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                                <div className="text-3xl font-bold text-cyan-400">50+</div>
                                <div className="text-sm text-slate-400 mt-1">Happy Clients</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                                <div className="text-3xl font-bold text-blue-400">95%</div>
                                <div className="text-sm text-slate-400 mt-1">Success Rate</div>
                            </div>
                        </div>

                        {/* Learn More Button */}
                        <Link to={createPageUrl('About')}>
                            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl">
                                Learn More About Us
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Right Content - Capabilities */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                                className="group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/50"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <cap.icon className="w-6 h-6 text-cyan-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{cap.title}</h3>
                                <p className="text-slate-400 text-sm">{cap.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
