import { Scan } from 'lucide-react';
import { NanoBananaHUD } from './wow/NanoBananaHUD';

const Stage = () => {
    return (
        <div className="flex-1 relative bg-black/40 flex flex-col items-center justify-center overflow-hidden group">
            {/* Verification Overlay Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Nano Banana HUD Overlay */}
            <NanoBananaHUD />

            {/* Placeholder Content */}
            <div className="relative z-10 text-center p-8 glass rounded-2xl border border-white/5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cobalt to-violet mx-auto mb-4 flex items-center justify-center blur-[1px] group-hover:blur-0 transition-all duration-500">
                    <Scan className="w-8 h-8 text-white animate-pulse" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Awaiting Input</h2>
                <p className="text-gray-400 font-mono text-sm">Target Scene: Empty</p>
            </div>
        </div>
    );
};

export default Stage;
