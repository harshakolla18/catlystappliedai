import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Search, ShoppingCart, BarChart3 } from 'lucide-react';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';

const products = [
    {
        id: 'command-center',
        name: 'CAAi Command Center',
        tagline: 'AI-Powered Business Intelligence Platform',
        description: 'A comprehensive command center that brings all your AI tools, analytics, and workflows into one unified dashboard.',
        status: 'In Development',
        url: 'https://commandcenter.catalystappliedai.com/',
        icon: BarChart3,
        hasPreview: true
    },
    {
        id: 'enterprise-search',
        name: 'Enterprise Search',
        tagline: 'Intelligent Search Across Your Organization',
        description: 'AI-powered search that understands context and delivers relevant results from all your enterprise data sources.',
        status: 'Coming Soon',
        url: '',
        icon: Search,
        hasPreview: false
    },
    {
        id: 'store-command',
        name: 'Store Command',
        tagline: 'Retail Operations Intelligence',
        description: 'Optimize store operations with AI-driven insights, inventory management, and customer analytics.',
        status: 'Coming Soon',
        url: '',
        icon: ShoppingCart,
        hasPreview: false
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.6
        }
    }
};

export default function Products() {
    return (
        <div className="min-h-screen bg-[#1a1f2e] overflow-hidden">
            <Navbar showNav={true} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
                    <motion.div 
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                        animate={{ 
                            x: [0, 50, 0],
                            y: [0, 30, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div 
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                        animate={{ 
                            x: [0, -40, 0],
                            y: [0, -50, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div 
                        className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
                        animate={{ 
                            x: [0, 60, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{ 
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.span 
                            className="text-cyan-400 text-sm font-semibold tracking-widest uppercase inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Our Products
                        </motion.span>
                        <motion.h1 
                            className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            AI Products Built for
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Business Impact</span>
                        </motion.h1>
                        <motion.p 
                            className="text-xl text-slate-300 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Explore our suite of AI-powered products designed to transform how businesses operate, 
                            make decisions, and drive growth.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 px-4 relative">
                {/* Floating background elements */}
                <motion.div 
                    className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                    className="absolute bottom-40 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"
                    animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div 
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                variants={cardVariants}
                                whileHover={{ 
                                    y: -12,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="group"
                            >
                                {/* Product Card */}
                                <div className="relative bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden h-full flex flex-col transition-all duration-500 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2">
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Product Preview or Icon */}
                                    {product.hasPreview && product.url ? (
                                        <div className="relative">
                                            <div className="aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                                                <iframe
                                                    src={product.url}
                                                    title={product.name}
                                                    className="w-full h-full scale-[0.5] origin-top-left"
                                                    style={{ border: 'none', width: '200%', height: '200%' }}
                                                />
                                            </div>
                                            {/* Overlay to prevent interaction */}
                                            <div 
                                                className="absolute inset-0 cursor-pointer"
                                                onClick={() => window.open(product.url, '_blank')}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white text-slate-900 px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 text-sm shadow-lg">
                                                        <ExternalLink className="w-4 h-4" />
                                                        View Live Demo
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="aspect-[4/3] w-full bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 flex items-center justify-center relative overflow-hidden">
                                            {/* Background Pattern */}
                                            <div className="absolute inset-0 opacity-10">
                                                <div className="absolute inset-0" style={{
                                                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                                                    backgroundSize: '24px 24px'
                                                }} />
                                            </div>
                                            {/* Icon Container */}
                                            <div className="relative">
                                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-500">
                                                    <product.icon className="w-12 h-12 text-slate-500 group-hover:text-cyan-400 transition-colors duration-500" />
                                                </div>
                                                {/* Glow behind icon */}
                                                <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Product Details */}
                                    <div className="relative p-6 flex-1 flex flex-col">
                                        {/* Status Badge */}
                                        <div className="mb-4">
                                            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold inline-flex items-center gap-2 ${
                                                product.status === 'In Development' 
                                                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400'
                                                    : 'bg-slate-800/80 border border-slate-600/50 text-slate-400'
                                            }`}>
                                                <span className={`w-2 h-2 rounded-full ${
                                                    product.status === 'In Development' ? 'bg-cyan-400 animate-pulse' : 'bg-slate-500'
                                                }`} />
                                                {product.status}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{product.name}</h3>
                                        <p className="text-cyan-400/80 text-sm font-medium mb-3">{product.tagline}</p>
                                        <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">{product.description}</p>

                                        {/* CTA Buttons */}
                                        <div className="flex gap-3">
                                            {product.url ? (
                                                <Button
                                                    onClick={() => window.open(product.url, '_blank')}
                                                    size="sm"
                                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex-1 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
                                                >
                                                    Visit Product
                                                    <ExternalLink className="ml-2 w-4 h-4" />
                                                </Button>
                                            ) : (
                                                <Button
                                                    disabled
                                                    size="sm"
                                                    className="bg-slate-800 text-slate-500 flex-1 cursor-not-allowed border border-slate-700"
                                                >
                                                    Coming Soon
                                                </Button>
                                            )}
                                            <Button
                                                onClick={() => window.location.href = `mailto:sales@catalystappliedai.com?subject=${encodeURIComponent(product.name)} Inquiry`}
                                                variant="outline"
                                                size="sm"
                                                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                                            >
                                                Inquire
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="py-20 px-4 bg-slate-900/30 relative overflow-hidden">
                {/* Animated gradient line */}
                <motion.div 
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
                    animate={{ 
                        backgroundPosition: ['200% 0', '-200% 0'],
                    }}
                    transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ backgroundSize: '200% 100%' }}
                />
                
                <motion.div 
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        More Products Coming Soon
                    </motion.h2>
                    <motion.p 
                        className="text-slate-300 text-lg mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        We're constantly building new AI-powered tools and platforms. 
                        Subscribe to be the first to know when we launch new products.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    >
                        <Button
                            onClick={() => window.location.href = 'mailto:sales@catalystappliedai.com?subject=Product Updates Subscription'}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                        >
                            Get Notified
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
