import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Aperture, Scan, Activity } from 'lucide-react';
import { NanoBananaHUD } from './wow/NanoBananaHUD';

interface StageProps {
    sceneTitle?: string;
    isLive?: boolean;
    onIngest?: () => void;
}

const Stage = ({ sceneTitle, isLive = false, onIngest }: StageProps) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isScanning, setIsScanning] = useState(false);

    // Auto-ingest for the demo if not live (to show the transition quicker or just keep manual?)
    // Keeping manual ingest for the interaction but let's make it look cool.

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
        <div className="flex-1 relative bg-charcoal flex flex-col items-center justify-center overflow-hidden p-8 transition-colors duration-500">

            {/* Main Stage Frame */}
            <div
                className={`relative w-full h-full max-w-6xl bg-black border ${isHovering ? 'border-orange shadow-[0_0_40px_rgba(255,79,0,0.1)]' : 'border-stone/10'} flex flex-col transition-all duration-300 overflow-hidden group shadow-2xl relative`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >

                {/* 1. Digital Light Table Grid (Background) */}
                <div className="absolute inset-0 z-0 opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}>
                </div>

                {/* 2. Content Area */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    {isLive ? (
                        <>
                            {/* Cinematic Letterboxing Matte */}
                            <div className="absolute inset-0 border-[0.5px] border-white/10 z-30 pointer-events-none m-4">
                                {/* Corner Brackets - Viewfinder Style */}
                                <div className="absolute top-0 left-0 w-6 h-6 border-t-[2px] border-l-[2px] border-white"></div>
                                <div className="absolute top-0 right-0 w-6 h-6 border-t-[2px] border-r-[2px] border-white"></div>
                                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[2px] border-l-[2px] border-white"></div>
                                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[2px] border-r-[2px] border-white"></div>
                            </div>

                            {/* Video Placeholder (High Fidelity) */}
                            <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
                                {/* Simulated Video Feed */}
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
                                    className="w-full h-full object-cover opacity-80 mix-blend-screen grayscale-[20%]"
                                    alt="Live Feed"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 mix-blend-multiply"></div>
                            </div>

                            {/* Spatial Audit Overlay (Scanning Bar) */}
                            <div className="absolute inset-0 z-20 pointer-events-none">
                                <motion.div
                                    className="absolute left-0 right-0 h-[1px] bg-optic-cyan/50 shadow-[0_0_20px_rgba(0,229,255,0.8)]"
                                    animate={{ top: ['10%', '90%', '10%'] }}
                                    transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                                />
                                {/* Scanned Hit Points (Simulated) */}
                                <motion.div
                                    className="absolute w-2 h-2 border border-optic-cyan rounded-full"
                                    style={{ left: '48%', top: '42%' }}
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>

                            {/* Cinema HUD */}

                            {/* Top Left: REC Status */}
                            <div className="absolute top-8 left-8 z-40 flex items-center gap-3">
                                <div className="w-3 h-3 bg-cinnabar rounded-full animate-pulse shadow-[0_0_10px_#E11D48]"></div>
                                <span className="font-sans font-bold text-cinnabar text-xs tracking-widest uppercase">REC ● LIVE</span>
                                <span className="text-white/40 text-[10px] font-mono border-l border-white/20 pl-3 ml-1">TCR: 14:02:59:12</span>
                            </div>

                            {/* Top Right: Scene Info */}
                            <div className="absolute top-8 right-8 flex flex-col items-end z-40">
                                <h2 className="text-3xl font-bold text-white tracking-tighter font-sans uppercase opacity-90">{sceneTitle}</h2>
                            </div>

                            {/* Bottom Left: Spatial Waveform */}
                            <div className="absolute bottom-8 left-8 right-32 h-16 flex items-end gap-[2px] opacity-80 z-40">
                                <Activity className="text-optic-cyan w-4 h-4 mb-2 mr-2" />
                                {[...Array(40)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className={`w-1 rounded-t-sm ${i % 10 === 0 ? 'bg-cinnabar' : 'bg-white/40'}`}
                                        animate={{ height: [10 + Math.random() * 20, 30 + Math.random() * 50, 10 + Math.random() * 20] }}
                                        transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
                                    />
                                ))}
                            </div>

                            {/* Bottom Right: Camera Specs */}
                            <div className="absolute bottom-8 right-8 flex flex-col items-end z-40 font-mono text-xs text-cinema-gold gap-1">
                                <span className="bg-black/50 px-2 py-1 border border-cinema-gold/20 rounded-sm">LENS: 35mm T1.5</span>
                                <span className="bg-black/50 px-2 py-1 border border-cinema-gold/20 rounded-sm">ISO: 800</span>
                                <span className="bg-black/50 px-2 py-1 border border-cinema-gold/20 rounded-sm">FPS: 24.00</span>
                                <span className="bg-black/50 px-2 py-1 border border-cinema-gold/20 rounded-sm text-optic-cyan border-optic-cyan/20">SHUTTER: 180°</span>
                            </div>

                            {/* Vector Overlay Component */}
                            <AnimatePresence>
                                <NanoBananaHUD />
                            </AnimatePresence>

                        </>
                    ) : (
                        <div className={`flex flex-col items-center transition-all duration-300 ${isHovering ? 'scale-105' : 'scale-100'}`}>
                            {isScanning ? (
                                <div className="flex flex-col items-center">
                                    <motion.div
                                        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                        className="mb-8 relative"
                                    >
                                        <Scan className="w-20 h-20 text-cinnabar" strokeWidth={1} />
                                        <div className="absolute inset-0 border border-cinnabar/30 rounded-full animate-ping"></div>
                                    </motion.div>
                                    <div className="text-cinnabar font-mono text-sm tracking-[0.3em] font-bold animate-pulse">INITIALIZING PRODUCTION LINK...</div>
                                </div>
                            ) : (
                                <>
                                    <div className={`w-32 h-32 border border-white/10 rounded-full flex items-center justify-center mb-8 transition-colors duration-300 bg-charcoal/50 backdrop-blur-sm ${isHovering ? 'border-orange shadow-[0_0_30px_rgba(255,79,0,0.2)]' : ''}`}>
                                        <Aperture className={`w-14 h-14 transition-colors duration-300 ${isHovering ? 'text-orange' : 'text-stone'}`} strokeWidth={1} />
                                    </div>
                                    <h3 className="text-white font-sans font-bold tracking-tight text-2xl mb-2">
                                        STANDBY FOR INGEST
                                    </h3>
                                    <p className="text-stone font-serif text-base italic opacity-60">
                                        Awaiting optical feed signal.
                                    </p>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* Metrics Footer */}
                <div className="absolute bottom-4 left-4 z-10 font-mono text-[9px] text-white/10 flex gap-4 pointer-events-none">
                    <span>MASTER_UNIT_01</span>
                    <span>GRID: OFF</span>
                </div>
            </div>
        </div>
    );
};

export default Stage;
