import { motion } from 'framer-motion';

const BraidedStream = () => {
    return (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-80">
            <svg
                className="w-full h-32 overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
            >
                {/* 1. Character Thread (Cyan) */}
                <motion.path
                    d="M 0 50 C 20 50, 20 40, 40 50 S 60 60, 80 50 S 100 50, 120 50"
                    fill="none"
                    stroke="#00E5FF"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* 2. Narrative Thread (Cinnabar) */}
                <motion.path
                    d="M 0 50 C 20 50, 20 60, 40 50 S 60 40, 80 50 S 100 50, 120 50"
                    fill="none"
                    stroke="#E11D48"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.2, ease: "easeInOut", delay: 0.1 }}
                />

                {/* 3. Lighting Thread (White) */}
                <motion.path
                    d="M 0 50 L 120 50"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
                />

                {/* Twist Node at 40% */}
                <foreignObject x="38" y="48" width="4" height="4">
                    <div className="w-1 h-1 bg-charcoal border border-stone rotate-45"></div>
                </foreignObject>

                {/* Twist Node at 80% */}
                <foreignObject x="78" y="48" width="4" height="4">
                    <div className="w-1 h-1 bg-charcoal border border-stone rotate-45"></div>
                </foreignObject>

            </svg>
        </div>
    );
};

const Timeline = () => {
    return (
        <div className="h-48 bg-cardstock border-t border-charcoal/10 relative z-10 flex flex-col overflow-hidden">
            {/* Background Persistence Heatmap */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cinnabar/5 to-optic-cyan/5 opacity-50 blur-3xl" />

            {/* Header Strip */}
            <div className="px-4 py-1 border-b border-charcoal/10 flex items-center justify-between bg-charcoal text-cardstock text-[10px] uppercase font-mono tracking-widest relative z-20">
                <span>Braided Stream Topology</span>
                <span>STATE_PERSISTENCE: 94%</span>
            </div>

            <div className="flex-1 flex flex-col relative">

                {/* Metadata Overlay (Floating) */}
                <div className="absolute top-2 left-0 right-0 flex justify-between px-8 z-30 font-mono text-[9px] text-stone">
                    <span>CHAR: ELARA_VANCE</span>
                    <span>LGT: 5600K_DUSK</span>
                    <span>NAR: RISING_TENSION</span>
                </div>

                {/* The Braided Stream */}
                <div className="flex-1 relative flex items-center w-full">
                    <BraidedStream />

                    {/* Hex ID Labels floating near twists */}
                    <div className="absolute top-1/2 left-[40%] text-[8px] font-mono text-charcoal -translate-y-6">sig_0x4F2A</div>
                    <div className="absolute top-1/2 left-[80%] text-[8px] font-mono text-charcoal -translate-y-6">sig_0xB91C</div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
