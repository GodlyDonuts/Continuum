import { useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';
import type { Directive } from '../types';

interface StudioDirectorProps {
    directives: Directive[];
    onSend: (text: string) => void;
}

const StudioDirector = ({ directives, onSend }: StudioDirectorProps) => {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [directives]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.currentTarget.value.trim()) {
            onSend(e.currentTarget.value);
            e.currentTarget.value = '';
        }
    };

    return (
        <div className="h-full flex flex-col bg-gallery-white">
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gallery-white z-10">
                <h2 className="font-sans font-bold text-lg text-black tracking-tight">Director's Suite</h2>
                <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
                    <Sparkles className="w-3 h-3 text-international-orange" />
                    <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">AI Active</span>
                </div>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-8">
                {directives.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center opacity-30">
                        <p className="font-serif italic text-gray-400">Begin by describing the scene...</p>
                    </div>
                ) : (
                    directives.map((msg) => (
                        <div key={msg.id} className="flex flex-col gap-2 max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-bottom-2 duration-300">
                            {msg.type === 'user' ? (
                                <div className="self-end text-right">
                                    <p className="text-2xl font-bold text-black leading-tight tracking-tight selection:bg-international-orange/20">
                                        {msg.content}
                                    </p>
                                </div>
                            ) : (
                                <div className="self-start max-w-xl">
                                    <p className="text-lg font-serif text-gray-500 leading-relaxed italic border-l-2 border-international-orange/20 pl-4 py-1">
                                        {/* Simplified AI response logic - extracting 'Reasoning' or 'Execution' merely as text for clean UI */}
                                        {msg.steps ? (
                                            msg.steps.map(step => (
                                                <span key={step.id} className="block mb-1">
                                                    {step.action.replace('Reasoning: ', '').replace('Executing: ', '')}
                                                </span>
                                            ))
                                        ) : (
                                            "Processing request..."
                                        )}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))
                )}
                <div ref={bottomRef} className="h-4" />
            </div>

            {/* Input Area */}
            <div className="p-8 pt-0 bg-gallery-white">
                <div className="max-w-2xl mx-auto relative group">
                    <input
                        type="text"
                        placeholder="Type a new directive..."
                        className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-6 pr-14 text-lg font-medium shadow-sm focus:outline-none focus:border-international-orange focus:ring-1 focus:ring-international-orange/20 transition-all placeholder:text-gray-300 text-black"
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
