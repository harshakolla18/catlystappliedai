import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Lightbulb, Users, Shield, Zap, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';

const values = [
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'We stay at the forefront of AI technology, continuously exploring new solutions to solve complex business challenges.'
    },
    {
        icon: Users,
        title: 'Partnership',
        description: 'We work alongside our clients as true partners, invested in their success and committed to long-term relationships.'
    },
    {
        icon: Shield,
        title: 'Integrity',
        description: 'We operate with transparency and honesty, delivering realistic expectations and measurable results.'
    },
    {
        icon: Zap,
        title: 'Impact',
        description: 'Every solution we build is designed to create tangible business value and meaningful operational improvements.'
    }
];

const team = [
    {
        name: 'Kenny Wallace',
        role: 'Founder & CEO',
        bio: 'Dynamic executive with 10+ years of leadership experience across Fortune 500 environments (Chewy, Amazon, Wayfair). Expert in high-impact strategies and organizational development.',
        image: '/kenny-wallace.png',
        linkedin: 'https://www.linkedin.com/in/kennethwallace21/',
        color: 'from-blue-400 to-indigo-500'
    },
    {
        name: 'Michael Deason',
        role: 'Vice President, Operations',
        bio: 'Global E-Commerce leader with deep expertise in M&A, expansion, and organizational development. guiding executive teams at companies like Amazon, Chewy, and Gopuff.',
        image: '/michael-deason.png',
        linkedin: 'https://www.linkedin.com/in/michael-deason-coss-804352143/',
        color: 'from-green-500 to-emerald-600'
    },
    {
        name: 'Andrew Welch',
        role: 'Vice President, Sales & Marketing',
        bio: 'Strategic executive focused on driving growth and building lasting client relationships across global markets.',
        image: ''
    },
    {
        name: 'Harsha Kolla',
        role: 'Director, Software Engineering',
        bio: 'Experienced engineering leader specializing in building scalable software systems and high-performing technical teams.',
        image: '/harshakolla.jpg',
        color: 'from-blue-500 to-blue-600',
        imageClass: 'object-top scale-110 brightness-110 contrast-110 saturate-110',
        addBorder: true
    }
];

const milestones = [
    {
        year: '2019',
        title: 'Company Founded',
        description: 'Catalyst Applied AI was founded with a mission to make AI accessible and practical for businesses of all sizes.'
    },
    {
        year: '2020',
        title: 'First Enterprise Client',
        description: 'Secured our first Fortune 500 client, delivering a workflow automation solution that saved $2M annually.'
    },
    {
        year: '2021',
        title: 'Team Expansion',
        description: 'Grew to 25 team members and opened our second office. Launched our training and enablement practice.'
    },
    {
        year: '2022',
        title: '100th Project Milestone',
        description: 'Completed our 100th successful AI implementation with a 95% client satisfaction rate.'
    },
    {
        year: '2023',
        title: 'Generative AI Leadership',
        description: 'Became early adopters and implementers of enterprise generative AI solutions, helping 50+ companies adopt LLMs safely.'
    },
    {
        year: '2024',
        title: 'Industry Recognition',
        description: 'Named a top AI consulting firm by industry analysts. Expanded to serve clients across 12 countries.'
    }
];

export default function About() {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowNav(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#060a14]">
            <Navbar showNav={showNav} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">About Us</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
                            Transforming Business Through{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">
                                Practical AI
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            We're a team of AI experts, engineers, and strategists dedicated to helping organizations
                            harness the power of artificial intelligence to drive real business results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/15"
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-500/15 flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                            <p className="text-slate-300 leading-relaxed">
                                To democratize AI by helping organizations of all sizes identify, design, and implement
                                practical AI solutions that create measurable business value. We bridge the gap between
                                AI's potential and real-world performance.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/15"
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-500/15 flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                            <p className="text-slate-300 leading-relaxed">
                                A world where every business, regardless of size or industry, can leverage AI to work
                                smarter, serve customers better, and compete effectively. We envision AI as an accessible
                                tool for growth, not a barrier to entry.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-4 bg-[#0d1425]/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">What Drives Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Our Core Values</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/30 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-600/15 flex items-center justify-center mb-4">
                                    <value.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                                <p className="text-slate-400 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section - commented out
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Our Team</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">Meet the Experts</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Our diverse team brings together decades of experience in AI, engineering,
                            consulting, and enterprise transformation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300"
                            >
                                <div className="relative w-40 h-40 mx-auto mb-6">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color || 'from-blue-500 to-blue-600'} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                                    <div className={`relative w-full h-full rounded-full shadow-xl group-hover:scale-105 transition-transform duration-500 ${member.addBorder ? 'bg-black flex items-center justify-center' : 'overflow-hidden border-2 border-slate-700/50'}`}>
                                        {member.addBorder ? (
                                            <div className="w-[85%] h-[85%] rounded-full overflow-hidden relative">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className={`w-full h-full object-cover transition-transform duration-500 ${member.imageClass || 'object-center'}`}
                                                />
                                            </div>
                                        ) : (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className={`w-full h-full object-cover transition-transform duration-500 ${member.imageClass || 'object-center'}`}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <h3 className="text-lg font-bold text-white">{member.name}</h3>
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`p-1.5 rounded-md text-white shadow-lg transition-all duration-300 bg-gradient-to-br ${member.color || 'from-[#0077b5] to-[#006097]'} hover:shadow-${member.color ? 'lg' : 'blue-500/25'}`}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Linkedin className="w-3.5 h-3.5" />
                                            </a>
                                        )}
                                    </div>

                                    <p className={`text-sm font-bold mb-3 bg-gradient-to-r ${member.color || 'from-blue-400 to-sky-400'} bg-clip-text text-transparent`}>
                                        {member.role}
                                    </p>

                                    <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            */}

            {/* Timeline */}
            <section className="py-20 px-4 bg-[#0d1425]/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Our Journey</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Company Milestones</h2>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#060a14] md:-translate-x-1/2 z-10" />

                                    {/* Content */}
                                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <span className="text-blue-400 font-bold text-lg">{milestone.year}</span>
                                        <h3 className="text-xl font-semibold text-white mt-1">{milestone.title}</h3>
                                        <p className="text-slate-400 mt-2">{milestone.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Work with Us?
                    </h2>
                    <p className="text-slate-300 text-lg mb-8">
                        Let's discuss how our team can help transform your business with AI.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={() => window.location.href = 'mailto:sales@catalystappliedai.com?subject=Partnership%20Inquiry'}
                            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/20"
                        >
                            Get in Touch
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Link to="/#services">
                            <Button
                                className="bg-white text-slate-900 hover:bg-slate-200 px-8 py-6 text-lg rounded-xl w-full"
                            >
                                Explore Our Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
