import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Aperture } from 'lucide-react';
import { NanoBananaHUD } from './wow/NanoBananaHUD';
import type { StageMetrics } from '../types';

interface StageProps {
    sceneTitle?: string;
    isLive?: boolean;
    metrics?: StageMetrics;
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
                className={`relative w-full h-full max-w-5xl bg-cardstock border ${isHovering ? 'border-orange shadow-[0_0_40px_rgba(255,79,0,0.1)]' : 'border-charcoal/5'} flex flex-col transition-all duration-300 overflow-hidden`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >

                {/* 1. Digital Light Table Grid (Empty State) */}
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
                            {/* Video Content Placeholder */}
                            <div className="absolute inset-0 bg-black flex items-center justify-center">
                                <div className="text-white/20 font-mono text-9xl tracking-tighter mix-blend-overlay">RAW</div>

                                {/* Scanline Effect - Triggered by props in real app, simply looping here for vibe */}
                                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtY2J6eXF6Ymx5eXF6eXF6eXF6eXF6eXF6eXF6eXF6eXF6/3o7qE1YN7aQfAQ0B0I/giphy.gif')] mix-blend-overlay bg-cover"></div>
                            </div>

                            {/* Vector Overlay */}
                            <AnimatePresence>
                                <NanoBananaHUD />
                            </AnimatePresence>

                            {/* Status Label */}
                            <div className="absolute bottom-8 right-8 flex flex-col items-end">
                                <h2 className="text-2xl font-bold text-white tracking-tighter font-sans mix-blend-overlay uppercase opacity-50">{sceneTitle}</h2>
                                <div className="text-[10px] font-mono text-white/50 tracking-widest mt-1">1080p // RAW_LOG_C</div>
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
                                        <div className="absolute inset-0 border border-cinnabar/30 rounded-full animate-ping"></div>
                                    </motion.div>
                                    <div className="text-cinnabar font-mono text-xs tracking-[0.2em] font-bold animate-pulse">ANALYZING TEMPORAL DATA...</div>
                                </div>
                            ) : (
                                <>
                                    {/* Static Empty State */}
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

                {/* Corner Coordinates */}
                <div className="absolute bottom-4 left-4 z-30 font-mono text-[9px] text-charcoal/30 flex gap-4">
                    <span>LIGHT_TABLE_READY</span>
                    <span className="opacity-50">GRID: 20px</span>
                </div>
            </div>
        </div>
    );
};

export default Stage;
