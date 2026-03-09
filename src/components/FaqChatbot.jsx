import React, { useState, useMemo } from 'react';
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
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 flex items-center justify-center transition-all duration-300 hover:scale-110 ${isOpen ? 'rotate-0' : 'rotate-0'}`}
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageCircle className="w-6 h-6" />
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-[#1a1f2e] rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <MessageCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Catalyst AI Assistant</h3>
                                <p className="text-cyan-100 text-xs">Here to help with your questions</p>
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="h-72 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                                        msg.type === 'user'
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-md'
                                            : 'bg-slate-800 text-slate-200 rounded-bl-md'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Search & FAQ Options */}
                    <div className="border-t border-slate-700/50 p-4 bg-slate-900/50">
                        {/* Search Bar */}
                        <div className="relative mb-3">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search FAQs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
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
                                        <ChevronRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                    </button>
                                ))
                            ) : (
                                <p className="text-slate-500 text-sm text-center py-2">No matching questions found</p>
                            )}
                        </div>
                        
                        {messages.length > 1 && (
                            <button
                                onClick={resetChat}
                                className="mt-3 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                                Start new conversation
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
