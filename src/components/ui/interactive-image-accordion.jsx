import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter, linkTo }) => {
    const content = (
        <div
            className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
            onMouseEnter={onMouseEnter}
        >
            {/* Background Image */}
            <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className={`absolute inset-0 transition-all duration-500 ${isActive ? 'bg-black/30' : 'bg-black/50'}`}></div>

            {/* Gradient overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Learn More indicator for active */}
            {isActive && linkTo && (
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to learn more →
                </div>
            )}

            {/* Caption Text */}
            <span
                className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-500 ease-in-out
          ${isActive
                        ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0 opacity-100'
                        : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90 opacity-80'
                    }
        `}
            >
                {item.title}
            </span>
        </div>
    );

    if (isActive && linkTo) {
        return (
            <Link to={linkTo} className="group">
                {content}
            </Link>
        );
    }

    return content;
};

// --- Main Component with customizable data ---
export function InteractiveImageAccordion({
    items,
    title,
    subtitle,
    ctaText,
    ctaHref,
    defaultActiveIndex = 0,
    className = ""
}) {
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

    const handleItemHover = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={`font-sans ${className}`}>
            <section className="container mx-auto px-4 py-12 md:py-24">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left Side: Text Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                            {title}
                        </h2>
                        <p className="mt-6 text-lg opacity-80 max-w-xl mx-auto lg:mx-0">
                            {subtitle}
                        </p>
                        {ctaText && ctaHref && (
                            <div className="mt-8">
                                <a
                                    href={ctaHref}
                                    className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-300"
                                >
                                    {ctaText}
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Right Side: Image Accordion */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-4 scrollbar-hide">
                            {items.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    item={item}
                                    isActive={index === activeIndex}
                                    onMouseEnter={() => handleItemHover(index)}
                                    linkTo={item.linkTo}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default InteractiveImageAccordion;
