import { useRef, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

import type { Directive } from '../types';

interface InspectorProps {
    directives?: Directive[];
    onSendDirective?: (text: string) => void;
}

const Inspector = ({ directives = [], onSendDirective }: InspectorProps) => {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [directives]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.currentTarget.value.trim()) {
            onSendDirective?.(e.currentTarget.value);
            e.currentTarget.value = '';
        }
    };

    return (
        <aside className="w-96 h-full glass-satin border-l border-white/50 flex flex-col z-20 shadow-2xl relative">
            <div className="p-4 border-b border-white/20 flex items-center justify-between">
                <h3 className="font-sans font-bold tracking-widest uppercase text-charcoal/80 flex items-center gap-2 text-xs">
                    <Sparkles className="w-3 h-3 text-cinema-gold" />
                    Directorial Log
                </h3>
                <span className="px-1.5 py-0.5 font-bold text-[9px] bg-cinema-gold/10 text-cinema-gold rounded-sm uppercase tracking-wider border border-cinema-gold/20">
                    Multi-Agent Active
                </span>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-8">
                {directives.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center opacity-40 text-center">
                        <div className="w-16 h-[1px] bg-charcoal/20 mb-4"></div>
                        <p className="font-serif italic text-charcoal text-sm">"The screen is a canvas, <br />awaiting your directive."</p>
                    </div>
                ) : (
                    directives.map((msg) => (
                        <div key={msg.id} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>

                            {/* Header */}
                            <div className="flex items-center gap-2 mb-1.5 opacity-60">
                                {msg.type === 'ai' && <div className="w-1.5 h-1.5 bg-cinema-gold rounded-full animate-pulse"></div>}
                                <span className="text-[9px] font-mono text-slate uppercase tracking-wider">
                                    {msg.type === 'user' ? 'DIRECTOR' : 'INTELLIGENCE HANDOFF'}
                                </span>
                                <span className="text-[9px] font-mono text-slate/50">{msg.timestamp}</span>
                            </div>

                            {/* Content */}
                            <div className={`max-w-[95%] text-sm ${msg.type === 'user'
                                ? 'font-serif text-charcoal leading-relaxed text-right'
                                : 'font-mono text-slate leading-tight w-full'}`}>

                                {msg.type === 'user' ? (
                                    msg.content
                                ) : (
                                    <div className="space-y-2 bg-white/40 p-3 rounded-sm border border-white/40 shadow-sm">
                                        {msg.steps?.map((step) => (
                                            <div key={step.id} className="flex gap-3 items-start group">
                                                {/* Color-Coded Thread */}
                                                <div className={`w-0.5 h-full min-h-[12px] mt-1 ${step.agent === 'GEMINI_3_PRO' ? 'bg-cinema-gold' : 'bg-cinnabar'
                                                    }`}></div>

                                                <div className="flex-1">
                                                    <div className="flex justify-between items-center mb-0.5">
                                                        <span className={`text-[9px] font-bold ${step.agent === 'GEMINI_3_PRO' ? 'text-cinema-gold' : 'text-cinnabar'
                                                            }`}>
                                                            {step.agent}
                                                        </span>
                                                        {step.confidence && (
                                                            <div className="flex items-center gap-1" title="Confidence Score">
                                                                <div className={`w-1.5 h-1.5 rounded-full ${step.confidence > 0.8 ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                                                                <span className="text-[8px] opacity-50">{Math.round(step.confidence * 100)}%</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="text-xs text-charcoal/90 leading-relaxed font-sans">{step.action}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                )}
                <div ref={bottomRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/20 bg-white/40 backdrop-blur-md">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Enter Directorial Note..."
                        className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-sm font-serif text-charcoal placeholder:text-stone focus:outline-none focus:border-cinnabar transition-colors"
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className="absolute right-0 bottom-2 text-[10px] font-bold text-cinnabar hover:text-orange transition-colors uppercase tracking-widest flex items-center gap-1 group"
                        onClick={(e) => {
                            const input = e.currentTarget.parentElement?.querySelector('input');
                            if (input?.value.trim()) {
                                onSendDirective?.(input.value);
                                input.value = '';
                            }
                        }}
                    >
                        EXECUTE
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Inspector;
