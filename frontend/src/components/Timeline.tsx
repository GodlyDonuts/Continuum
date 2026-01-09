import { motion } from 'framer-motion';

const BraidedStream = () => {
    return (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-80 z-20">
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

                {/* Twist Node at 40% (Tooltip Anchor) */}
                <foreignObject x="38" y="48" width="4" height="4" className="overflow-visible group">
                    <div className="w-1 h-1 bg-charcoal border border-stone rotate-45 cursor-pointer hover:scale-150 transition-transform"></div>

                    {/* Glassmorphic Tooltip */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-40 bg-charcoal/80 backdrop-blur-md border border-white/20 p-2 rounded-sm text-left opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="text-[9px] font-mono text-optic-cyan font-bold mb-1">SIG_0x4F2A</div>
                        <div className="text-[8px] font-mono text-stone leading-tight">
                            LIGHTING: DUSK (5600K)<br />
                            EVENT: BROKEN GLASS<br />
                            ID: PROP_04
                        </div>
                    </div>
                </foreignObject>

                {/* Twist Node at 80% */}
                <foreignObject x="78" y="48" width="4" height="4" className="overflow-visible group">
                    <div className="w-1 h-1 bg-charcoal border border-stone rotate-45 cursor-pointer hover:scale-150 transition-transform"></div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-40 bg-charcoal/80 backdrop-blur-md border border-white/20 p-2 rounded-sm text-left opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="text-[9px] font-mono text-optic-cyan font-bold mb-1">SIG_0xB91C</div>
                        <div className="text-[8px] font-mono text-stone leading-tight">
                            LIGHTING: SODIUM_VAPOR<br />
                            EVENT: REVEAL<br />
                            ID: ACT_02
                        </div>
                    </div>
                </foreignObject>

            </svg>
        </div>
    );
};

const Timeline = () => {
    return (
        <div className="h-64 bg-charcoal border-t border-white/10 relative z-10 flex flex-col overflow-hidden">
            {/* Background Persistence Heatmap */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cinnabar/5 to-optic-cyan/5 opacity-50 blur-3xl pointer-events-none" />

            {/* Header Strip with Legend */}
            <div className="px-4 py-1.5 border-b border-charcoal/10 flex items-center justify-between bg-black/40 text-stone text-[9px] uppercase font-mono tracking-widest relative z-20 backdrop-blur-sm">
                <div className="flex gap-4">
                    <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-optic-cyan rounded-full"></div>CHARACTER</span>
                    <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-cinema-gold rounded-full"></div>ENV</span>
                    <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-cinnabar rounded-full"></div>NARRATIVE</span>
                </div>
                <span>STATE_PERSISTENCE: 94%</span>
            </div>

            {/* Storyboard Film Strip */}
            <div className="h-24 flex items-center gap-1 px-4 mt-2 overflow-x-auto custom-scrollbar opacity-60 hover:opacity-100 transition-opacity">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex-shrink-0 w-32 h-20 bg-black border border-white/10 rounded-sm relative overflow-hidden group cursor-pointer hover:border-white/40 transition-colors">
                        <img
                            src={`https://images.unsplash.com/photo-${[
                                '1534528741775-53994a69daeb',
                                '1507003211169-0a1dd7228f2d',
                                '1494790108377-be9c29b29330',
                                '1531746020798-e6953c6e8e04',
                                '1492633423870-43d1cd2775eb',
                                '1500648767791-00dcc994a43e',
                                '1535713875002-d1d0cf377fde',
                                '1524504388940-b1c1722653e1'
                            ][i]}?q=60&w=200&auto=format&fit=crop`}
                            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            alt="Storyboard Frame"
                        />
                        <div className="absolute bottom-1 left-1 text-[8px] font-mono text-white bg-black/50 px-1">
                            {(i * 120 + 24).toString().padStart(4, '0')}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex-1 flex flex-col relative">
                {/* Metadata Overlay (Floating) */}
                <div className="absolute top-2 left-0 right-0 flex justify-between px-8 z-30 font-mono text-[9px] text-white/20 pointer-events-none">
                    <span>CHAR: ELARA_VANCE</span>
                    <span>LGT: 5600K_DUSK</span>
                    <span>NAR: RISING_TENSION</span>
                </div>

                {/* The Braided Stream */}
                <div className="flex-1 relative flex items-center w-full">
                    <BraidedStream />
                </div>
            </div>
        </div>
    );
};

export default Timeline;
