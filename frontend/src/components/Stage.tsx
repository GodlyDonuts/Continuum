import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Aperture } from 'lucide-react';
import { NanoBananaHUD } from './wow/NanoBananaHUD';

interface StageProps {
    sceneTitle?: string;
    isLive?: boolean;
    onIngest?: () => void;
}

const Stage = ({ sceneTitle, isLive = false, onIngest }: StageProps) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isScanning, setIsScanning] = useState(false);

    // Mock Drop Handler
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsHovering(false);
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
            onIngest?.();
        }, 1500);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsHovering(true);
    };

    const handleDragLeave = () => {
        setIsHovering(false);
    };

    return (
        <div className="flex-1 relative bg-cardstock flex flex-col items-center justify-center overflow-hidden p-12 transition-colors duration-500">

            {/* Studio Frame / Light Table */}
            <div
                className={`relative w-full h-full max-w-5xl bg-cardstock border ${isHovering ? 'border-orange shadow-[0_0_40px_rgba(255,79,0,0.1)]' : 'border-charcoal/5'} flex flex-col transition-all duration-300 overflow-hidden group`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >

                {/* 1. Digital Light Table Grid */}
                {!isLive && (
                    <div className="absolute inset-0 z-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}>
                    </div>
                )}

                {/* 2. Content Area */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    {isLive ? (
                        <>
                            {/* Cinematic Letterboxing Matte (Optional, purely aesthetic container) */}
                            <div className="absolute inset-4 border-[0.5px] border-white/20 z-30 pointer-events-none">
                                {/* Corner Brackets - Viewfinder Style */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white"></div>
                            </div>

                            {/* Video Placeholder */}
                            <div className="absolute inset-0 bg-black flex items-center justify-center">
                                <div className="text-white/20 font-mono text-9xl tracking-tighter mix-blend-overlay">RAW</div>
                                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtY2J6eXF6Ymx5eXF6eXF6eXF6eXF6eXF6eXF6eXF6eXF6/3o7qE1YN7aQfAQ0B0I/giphy.gif')] mix-blend-overlay bg-cover"></div>
                            </div>

                            {/* Spatial-Temporal Waveform (Bottom Overlay) */}
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent flex items-end px-8 pb-4 z-40">
                                <div className="w-full h-8 flex items-end gap-[1px] opacity-60">
                                    {[...Array(50)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`flex-1 ${i === 34 ? 'bg-cinnabar h-full' : 'bg-optic-cyan h-1/3'}`}
                                            // Simulated random heights
                                            style={{ height: i === 34 ? '100%' : `${30 + Math.random() * 40}%` }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <AnimatePresence>
                                <NanoBananaHUD />
                            </AnimatePresence>

                            <div className="absolute top-8 right-8 flex flex-col items-end z-40">
                                <h2 className="text-2xl font-bold text-white tracking-tighter font-sans mix-blend-overlay uppercase opacity-50">{sceneTitle}</h2>
                                <div className="text-[10px] font-mono text-white/50 tracking-widest mt-1 flex gap-2">
                                    <span className="text-cinnabar">● REC</span>
                                    <span>1080p // RAW_LOG_C</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className={`flex flex-col items-center transition-all duration-300 ${isHovering ? 'scale-105' : 'scale-100'}`}>
                            {isScanning ? (
                                <div className="flex flex-col items-center">
                                    <motion.div
                                        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                        className="mb-6 relative"
                                    >
                                        <Aperture className="w-16 h-16 text-cinnabar opacity-80" strokeWidth={1} />
                                    </motion.div>
                                    <div className="text-cinnabar font-mono text-xs tracking-[0.2em] font-bold animate-pulse">ANALYZING TEMPORAL DATA...</div>
                                </div>
                            ) : (
                                <>
                                    <div className={`w-32 h-32 border-[0.5px] rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${isHovering ? 'border-orange bg-orange/5' : 'border-stone/20'}`}>
                                        <Aperture className={`w-12 h-12 transition-colors duration-300 ${isHovering ? 'text-orange' : 'text-stone/40'}`} strokeWidth={1} />
                                    </div>
                                    <h3 className="text-charcoal font-sans font-medium tracking-tight text-lg mb-2">
                                        INGEST FOOTAGE TO INITIALIZE CONTINUUM
                                    </h3>
                                    <p className="text-stone font-serif text-sm italic opacity-60">
                                        Drag and drop raw sequences to build your World Bible.
                                    </p>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* Metrics Footer */}
                <div className="absolute bottom-4 left-4 z-40 font-mono text-[9px] text-charcoal/30 flex gap-4">
                    <span>LIGHT_TABLE_READY</span>
                    <span className="opacity-50">GRID: 20px</span>
                </div>
            </div>
        </div>
    );
};

export default Stage;
