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
        <aside className="w-96 h-full glass-satin border-l border-white/40 flex flex-col z-20 shadow-2xl relative">
            <div className="p-4 border-b border-white/20 flex items-center justify-between">
                <h3 className="font-sans font-bold tracking-widest uppercase text-charcoal/80 flex items-center gap-2 text-xs">
                    <Sparkles className="w-3 h-3 text-cinnabar" />
                    Directorial Log
                </h3>
                <span className="px-1.5 py-0.5 font-bold text-[9px] bg-slate/10 text-slate rounded-sm uppercase tracking-wider">
                    Collaboration Active
                </span>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-6">
                {directives.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center opacity-40 text-center">
                        <div className="w-16 h-[1px] bg-charcoal/20 mb-4"></div>
                        <p className="font-serif italic text-charcoal text-sm">"The screen is a canvas, <br />awaiting your directive."</p>
                    </div>
                ) : (
                    directives.map((msg) => (
                        <div key={msg.id} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[9px] font-mono text-slate uppercase tracking-wider">
                                    {msg.type === 'user' ? 'DIRECTIVE' : 'REFACTORING'}
                                </span>
                                <span className="text-[9px] font-mono text-slate/50">{msg.timestamp}</span>
                            </div>

                            <div className={`max-w-[90%] text-sm ${msg.type === 'user'
                                ? 'font-serif text-charcoal leading-relaxed'
                                : 'font-mono text-slate leading-tight bg-slate/5 p-2 rounded-sm border-l-2 border-cinnabar'}`}>
                                {msg.content}
                            </div>
                        </div>
                    ))
                )}
                <div ref={bottomRef} />
            </div>

            {/* Input Area - Floats at bottom */}
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
