import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronRight, Search } from 'lucide-react';

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We offer AI Discovery & Diagnostic, Custom AI Solutions, Workflow Automation, Data Engineering, AI Tools Implementation, and Training & Enablement services."
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on scope. Discovery projects typically take 2-4 weeks, while custom AI solutions can range from 2-6 months depending on complexity."
    },
    {
        question: "Do you work with small businesses?",
        answer: "Yes! We work with businesses of all sizes, from startups to Fortune 500 companies. Our solutions are tailored to fit your specific needs and budget."
    },
    {
        question: "What industries do you serve?",
        answer: "We serve healthcare, finance, retail, manufacturing, legal, and many other industries. Our AI solutions are adaptable to virtually any sector."
    },
    {
        question: "How do I get started?",
        answer: "Simply contact us through our website or email sales@catalystappliedai.com. We'll schedule a free consultation to discuss your needs."
    },
    {
        question: "What makes you different from other AI consultants?",
        answer: "We focus on practical, ROI-driven AI solutions rather than hype. Our team has hands-on experience implementing AI at scale, and we prioritize your business outcomes."
    },
    {
        question: "Do you offer ongoing support?",
        answer: "Yes, we provide ongoing support and maintenance packages. We believe in long-term partnerships and can help you continuously optimize and scale your AI solutions."
    },
    {
        question: "What is your pricing model?",
        answer: "We offer flexible pricing including project-based, retainer, and hourly models. We'll recommend the best approach based on your specific needs during our initial consultation."
    },
    {
        question: "Do you provide training for our team?",
        answer: "Absolutely! Our Training & Enablement service includes workshops, hands-on labs, and ongoing coaching to help your team confidently use and manage AI tools."
    },
    {
        question: "Is my data secure with you?",
        answer: "Security is our top priority. We follow industry best practices, sign NDAs, and implement enterprise-grade security measures. Your data remains yours and is handled with strict confidentiality."
    },
    {
        question: "Can you integrate AI with our existing systems?",
        answer: "Yes! We specialize in integrating AI solutions with your existing tech stack including CRMs, ERPs, databases, and other business tools without disrupting your operations."
    },
    {
        question: "What if AI doesn't work for our use case?",
        answer: "That's what our Discovery & Diagnostic phase is for. We assess feasibility first and only recommend AI where it makes sense. If AI isn't the right fit, we'll tell you honestly."
    },
    {
        question: "Where are you located?",
        answer: "We're based in Kentucky but work with clients globally. Our team can work remotely or on-site depending on your preferences and project requirements."
    },
    {
        question: "Do you build chatbots and virtual assistants?",
        answer: "Yes! We build custom conversational AI solutions including chatbots, virtual assistants, and AI-powered customer service tools tailored to your business needs."
    },
    {
        question: "How do you measure AI project success?",
        answer: "We define clear KPIs upfront—whether it's time saved, cost reduction, accuracy improvement, or revenue impact. We track and report on these metrics throughout the engagement."
    },
    {
        question: "Can you help with AI strategy without building anything?",
        answer: "Definitely! Our Discovery & Diagnostic service provides strategic guidance, roadmaps, and recommendations without any commitment to build. Many clients start here."
    }
];

export default function FaqChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFaq, setSelectedFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi! 👋 I'm here to help answer your questions about Catalyst Applied AI. Search or choose a topic below!" }
    ]);

    const filteredFaqs = useMemo(() => {
        if (!searchQuery.trim()) return faqs;
        const query = searchQuery.toLowerCase();
        return faqs.filter(faq => 
            faq.question.toLowerCase().includes(query) || 
            faq.answer.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    const handleFaqClick = (faq) => {
        setMessages(prev => [
            ...prev,
            { type: 'user', text: faq.question },
            { type: 'bot', text: faq.answer }
        ]);
        setSelectedFaq(faq);
        setSearchQuery('');
    };

    const resetChat = () => {
        setMessages([
            { type: 'bot', text: "Hi! 👋 I'm here to help answer your questions about Catalyst Applied AI. Search or choose a topic below!" }
        ]);
        setSelectedFaq(null);
        setSearchQuery('');
    };

    return (
        <>
            {/* Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-full h-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center"
                        >
                            <X className="w-6 h-6 text-white" />
                        </motion.div>
                    ) : (
                        <motion.img
                            key="avatar"
                            src="/chatbot.jpg"
                            alt="Chat with us"
                            className="w-full h-full object-cover"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-[#060a14] rounded-2xl shadow-2xl border border-blue-500/15 overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                                <img src="/chatbot.jpg" alt="AI Assistant" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Catalyst AI Assistant</h3>
                                <p className="text-blue-100 text-xs">Here to help with your questions</p>
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="h-72 overflow-y-auto p-4 space-y-4 relative">
                        {/* Background logo watermark */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <img src="/logo.jpg" alt="" className="w-28 h-28 object-contain opacity-20 rounded-xl" />
                        </div>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex items-end gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {msg.type === 'bot' && (
                                    <img src="/chatbot.jpg" alt="" className="w-7 h-7 rounded-full object-cover shrink-0" />
                                )}
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                        msg.type === 'user'
                                            ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-br-md'
                                            : 'bg-slate-800 text-slate-200 rounded-bl-md'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Search & FAQ Options */}
                    <div className="border-t border-blue-500/10 p-4 bg-[#0d1425]/50">
                        {/* Search Bar */}
                        <div className="relative mb-3">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search FAQs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>

                        <p className="text-xs text-slate-400 mb-2">
                            {searchQuery ? `${filteredFaqs.length} result${filteredFaqs.length !== 1 ? 's' : ''} found` : 'Quick questions:'}
                        </p>
                        <div className="space-y-2 max-h-36 overflow-y-auto">
                            {filteredFaqs.length > 0 ? (
                                filteredFaqs.map((faq, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleFaqClick(faq)}
                                        className="w-full text-left p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 text-sm flex items-center justify-between group transition-colors"
                                    >
                                        <span className="truncate pr-2">{faq.question}</span>
                                        <ChevronRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                    </button>
                                ))
                            ) : (
                                <p className="text-slate-500 text-sm text-center py-2">No matching questions found</p>
                            )}
                        </div>
                        
                        {messages.length > 1 && (
                            <button
                                onClick={resetChat}
                                className="mt-3 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                Start new conversation
                            </button>
                        )}
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </>
    );
}
