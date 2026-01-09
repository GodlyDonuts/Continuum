import { NanoBananaHUD } from './wow/NanoBananaHUD';
import type { StageMetrics } from '../types';

interface StageProps {
    sceneTitle?: string;
    isLive?: boolean;
    metrics?: StageMetrics;
}

const Stage = ({ sceneTitle, isLive = false, metrics }: StageProps) => {
    return (
        <div className="flex-1 relative bg-cardstock flex flex-col items-center justify-center overflow-hidden p-8">
            {/* Studio Frame */}
            <div className="relative w-full max-w-4xl aspect-video bg-charcoal shadow-none border border-charcoal/10 overflow-hidden flex flex-col">

                {/* Verification Overlay - Technical Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-10" />

                {/* Nano Banana HUD Overlay */}
                {isLive && <NanoBananaHUD />}

                {/* Content Area */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {isLive ? (
                        <>
                            {/* Vector Schematic for Light Direction */}
                            <div className="absolute top-8 left-8 w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
                                <div className="w-full h-[1px] bg-white/20 -rotate-45"></div>
                                <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
                                <div className="absolute -bottom-4 w-full text-center text-[8px] font-mono text-white/50">LIGHT_VEC</div>
                            </div>

                            <h2 className="text-4xl font-bold text-white tracking-tighter mb-4 font-sans mix-blend-overlay uppercase">{sceneTitle}</h2>

                            <div className="flex items-center gap-4">
                                <div className="bg-orange px-2 py-0.5 text-[10px] uppercase font-bold text-white tracking-widest rounded-sm">
                                    LIVE RENDER
                                </div>
                                <div className="text-[10px] font-mono text-white/50">
                                    BUFFER: {metrics?.bufferHealth ?? 0}%
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="text-stone font-mono text-xs tracking-widest border border-white/10 px-4 py-2 rounded-sm">
                            AWAITING_INPUT_SIGNAL...
                        </div>
                    )}

                </div>

                {/* Corner Coordinates */}
                <div className="absolute bottom-4 left-4 z-20 font-mono text-[9px] text-white/40">
                    X: {metrics?.x.toFixed(2) ?? '0.00'} Y: {metrics?.y.toFixed(2) ?? '0.00'}
                </div>
            </div>
        </div>
    );
};

export default Stage;
