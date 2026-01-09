import { ThoughtSignature } from './wow/ThoughtSignature';

const Timeline = () => {
    return (
        <div className="h-48 glass border-t border-white/10 relative z-20 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                <div className="h-full w-1/3 bg-gradient-to-r from-cobalt to-violet" />
            </div>

            <div className="flex-1 flex items-center px-8 gap-8 overflow-x-auto">
                <div className="text-xs font-mono text-gray-500 min-w-[100px]">SEQ_01</div>
                {/* Render a few nodes */}
                <div className="flex items-center gap-16">
                    <ThoughtSignature />
                    <ThoughtSignature />
                    <ThoughtSignature />
                    <ThoughtSignature />
                    <ThoughtSignature />
                </div>
            </div>

            <div className="p-2 border-t border-white/5 text-center text-[10px] text-gray-600 font-mono tracking-widest">
                [DIRECTOR'S LOOP TIMELINE - SEQUENCE 01]
            </div>
        </div>
    );
};

export default Timeline;
