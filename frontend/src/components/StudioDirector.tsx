import { useRef, useEffect, useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import type { Directive } from '../types';

interface StudioDirectorProps {
    directives: Directive[];
    onSend: (text: string) => void;
    isProcessing?: boolean;
}

// Typewriter Component
const TypewriterText = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState('');
    const indexRef = useRef(0);

    useEffect(() => {
        setDisplayedText('');
        indexRef.current = 0;

        const intervalId = setInterval(() => {
            if (indexRef.current < text.length) {
                setDisplayedText((current) => current + text.charAt(indexRef.current));
                indexRef.current++;
            } else {
                clearInterval(intervalId);
            }
        }, 30); // Speed of typing

        return () => clearInterval(intervalId);
    }, [text]);

    // Parse for metadata tags [TAG: VALUE]
    const renderWithMetadata = (content: string) => {
        const parts = content.split(/(\[.*?\])/g);
        return parts.map((part, i) => {
            if (part.startsWith('[') && part.endsWith(']')) {
                // Remove brackets
                const tagContent = part.slice(1, -1);
                return (
                    <span key={i} className="inline-block mx-1 px-1.5 py-0.5 text-[10px] bg-gray-100 text-gray-500 font-mono rounded-sm border border-gray-200">
                        {tagContent}
                    </span>
                );
            }
            return <span key={i}>{part}</span>;
        });
    };

    return <span>{renderWithMetadata(displayedText)}</span>;
};

const StudioDirector = ({ directives, onSend, isProcessing }: StudioDirectorProps) => {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [directives, isProcessing]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.currentTarget.value.trim()) {
            onSend(e.currentTarget.value);
            e.currentTarget.value = '';
        }
    };

    return (
        <div className="h-full flex flex-col bg-gallery-white relative">
            {/* Header */}
            <div className="p-6 border-b border-[#EDEDED] flex items-center justify-between bg-gallery-white z-10">
                <h2 className="font-sans font-bold text-lg text-black tracking-tight" style={{ fontFamily: '"Inter", sans-serif' }}>Director's Suite</h2>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#F5F5F5] rounded-full border border-[#EDEDED]">
                    <Sparkles className={`w-3 h-3 ${isProcessing ? 'text-international-orange animate-pulse' : 'text-gray-400'}`} />
                    <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                        {isProcessing ? 'System Active' : 'System Ready'}
                    </span>
                </div>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-8 pb-32">
                {directives.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center opacity-30">
                        <p className="font-serif italic text-gray-400">Begin by describing the scene...</p>
                    </div>
                ) : (
                    directives.map((msg, idx) => (
                        <div key={msg.id} className="flex flex-col gap-2 max-w-2xl mx-auto w-full">
                            {msg.type === 'user' ? (
                                <div className="self-end text-right animate-in fade-in slide-in-from-bottom-2 duration-300">
                                    <p className="text-2xl font-bold text-black leading-tight tracking-tight selection:bg-international-orange/20 font-sans">
                                        {msg.content}
                                    </p>
                                </div>
                            ) : (
                                <div className="self-start max-w-xl">
                                    <div className="text-lg font-serif text-gray-500 leading-relaxed italic border-l-2 border-international-orange/20 pl-4 py-1">
                                        {msg.steps ? (
                                            msg.steps.map((step) => (
                                                <div key={step.id} className="mb-2 last:mb-0">
                                                    {/* Only Typewrite the last message if it's new, otherwise static to prevent re-typing on scroll */
                                                        idx === directives.length - 1 ? (
                                                            <TypewriterText text={step.action.replace('Reasoning: ', '').replace('Executing: ', '')} />
                                                        ) : (
                                                            <span>{step.action.replace('Reasoning: ', '').replace('Executing: ', '')}</span>
                                                        )}
                                                </div>
                                            ))
                                        ) : (
                                            "Processing..."
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}
                {isProcessing && (
                    <div className="max-w-xl mx-auto pl-4 border-l-2 border-gray-100 py-1">
                        <span className="inline-block w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="inline-block w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce mx-1 [animation-delay:-0.15s]"></span>
                        <span className="inline-block w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                    </div>
                )}
                <div ref={bottomRef} />
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gallery-white via-gallery-white to-transparent pt-20">
                <div className="max-w-2xl mx-auto relative group">
                    <input
                        type="text"
                        placeholder="Type a new directive..."
                        className="w-full bg-white border border-[#EDEDED] rounded-2xl py-4 pl-6 pr-14 text-lg font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)] focus:outline-none focus:border-international-orange focus:ring-1 focus:ring-international-orange/20 transition-all placeholder:text-gray-300 text-black caret-international-orange"
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                    <button
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black text-white rounded-xl hover:bg-international-orange transition-colors duration-200"
                        onClick={(e) => {
                            const input = e.currentTarget.parentElement?.querySelector('input');
                            if (input?.value.trim()) {
                                onSend(input.value);
                                input.value = '';
                            }
                        }}
                    >
                        <Send className="w-4 h-4 ml-0.5" strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudioDirector;
