import { Scan, Clapperboard } from 'lucide-react';
import { NanoBananaHUD } from './wow/NanoBananaHUD';

const Stage = () => {
    return (
        <div className="flex-1 relative bg-gallery flex flex-col items-center justify-center overflow-hidden group p-8">
            {/* Studio Frame - Black border to frame content */}
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-sm shadow-2xl overflow-hidden ring-1 ring-cool-grey">
                {/* Verification Overlay - Frosted Glass */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] pointer-events-none z-10" />

                {/* Nano Banana HUD Overlay */}
                <NanoBananaHUD />

                {/* Placeholder Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center ring-1 ring-white/20 mb-6 group-hover:scale-105 transition-transform duration-500">
                        <Clapperboard className="w-8 h-8 text-white/80" />
                    </div>
                    <h2 className="text-3xl font-bold text-white tracking-tight mb-2 font-serif italic">Scene 14: The Arrival</h2>
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur rounded-full border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-white/60 tracking-wider">LIVE RENDER</span>
                    </div>
                </div>

                {/* Corner Branding */}
                <div className="absolute bottom-4 right-4 z-20">
                    <div className="flex items-center gap-2 opacity-50">
                        <Scan className="w-4 h-4 text-white" />
                        <span className="text-[10px] text-white font-mono">GEMINI_3_PRO_VISION</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stage;
