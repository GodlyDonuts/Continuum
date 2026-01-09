import { ThoughtSignature } from './wow/ThoughtSignature';

const Timeline = () => {
    return (
        <div className="h-48 bg-cardstock border-t border-charcoal/10 relative z-20 flex flex-col">
            {/* Header Strip */}
            <div className="px-4 py-1 border-b border-charcoal/10 flex items-center justify-between bg-charcoal text-cardstock text-[10px] uppercase font-mono tracking-widest">
                <span>Director's Metadata Ribbon</span>
                <span>SEQ_01 // TC: 00:00:14:12</span>
            </div>

            <div className="flex-1 flex flex-col">
                {/* Metadata Scrolling Area (Conceptual) */}
                <div className="h-6 bg-charcoal/5 border-b border-charcoal/10 overflow-hidden flex items-center px-4 font-mono text-[10px] text-charcoal/70 whitespace-nowrap">
                    <span className="mr-8">&gt;&gt; DIRECTORIAL DECISION: MAINTAINING SHADOW DENSITY ON SUBJECT A</span>
                    <span className="mr-8">&gt;&gt; TRACKING GLASS SHARDS FROM SEQ_01</span>
                    <span className="mr-8">&gt;&gt; COLOR GRADE: LUT_KODAK_2383 APPLIED</span>
                </div>

                {/* Timeline Track */}
                <div className="flex-1 relative flex items-center overflow-hidden">
                    {/* Center Line */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-charcoal/20 z-0"></div>

                    {/* Nodes Container */}
                    <div className="flex items-center gap-12 px-12 relative z-10">
                        <div className="text-[10px] font-mono font-bold text-stone bg-cardstock px-2">START</div>
                        <ThoughtSignature />
                        <ThoughtSignature />
                        <ThoughtSignature />
                        <ThoughtSignature />
                        <ThoughtSignature />
                        <div className="text-[10px] font-mono font-bold text-stone bg-cardstock px-2">END</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
