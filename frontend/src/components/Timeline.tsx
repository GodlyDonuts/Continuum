import { ThoughtSignature } from './wow/ThoughtSignature';

const Timeline = () => {
    return (
        <div className="h-56 bg-white border-t border-cool-grey relative z-20 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
            {/* Processing Shimmer Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-30" />

            {/* Header */}
            <div className="px-6 py-3 border-b border-cool-grey/30 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Director's Loop // Sequence 01</span>
                <div className="flex gap-4">
                    <div className="text-[10px] font-mono text-gray-400">Total Duration: <span className="text-gray-900">14s</span></div>
                    <div className="text-[10px] font-mono text-gray-400">Nodes: <span className="text-gray-900">12</span></div>
                </div>
            </div>

            <div className="flex-1 flex items-center px-12 gap-12 overflow-x-auto relative">
                {/* Connecting Line (Dashed) */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] border-t border-dashed border-cool-grey z-0" />

                <div className="text-xs font-mono text-gray-400 min-w-[60px] relative z-10 bg-white px-2">START</div>

                {/* Render Nodes */}
                <div className="flex items-center gap-24 relative z-10">
                    <ThoughtSignature />
                    <ThoughtSignature />
                    <ThoughtSignature />
                    <ThoughtSignature />
                    <ThoughtSignature />
                </div>

                <div className="text-xs font-mono text-gray-400 min-w-[60px] relative z-10 bg-white px-2">END</div>
            </div>
        </div>
    );
};

export default Timeline;
