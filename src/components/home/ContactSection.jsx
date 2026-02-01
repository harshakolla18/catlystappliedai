import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    return (
        <section id="contact" className="py-24 px-4 bg-[#1a1f2e] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Contact Us
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Ready to unlock AI for your business? Book your ROI assessment today
                        and discover how much time and money you can save.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* CTA Card */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                See How Much Time You Can Save!
                            </h3>
                            <p className="text-slate-300 mb-6">
                                Schedule a free ROI assessment and get a personalized report
                                on the potential impact AI can have on your business.
                            </p>
                            <Button
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl"
                                onClick={() => window.location.href = 'mailto:sales@catalystappliedai.com?subject=Request%20for%20Information'}
                            >
                                Book Your ROI Assessment
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            <a
                                href="mailto:sales@catalystappliedai.com"
                                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400">Email us at</div>
                                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                        sales@catalystappliedai.com
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {isSubmitted ? (
                            <div className="h-full flex items-center justify-center p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                                    <p className="text-slate-400">
                                        We've received your message and will get back to you shortly.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm text-slate-400 mb-2 block">Name</label>
                                        <Input
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-slate-400 mb-2 block">Email</label>
                                        <Input
                                            type="email"
                                            placeholder="you@company.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm text-slate-400 mb-2 block">Company</label>
                                    <Input
                                        placeholder="Your company name"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-slate-400 mb-2 block">Message</label>
                                    <Textarea
                                        placeholder="Tell us about your project and how we can help..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 min-h-[120px]"
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-6 rounded-xl"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Send Message
                                            <Send className="w-4 h-4" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
