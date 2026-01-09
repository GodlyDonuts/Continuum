import { Activity } from 'lucide-react';

const Inspector = () => {
    return (
        <aside className="w-80 h-full glass border-l border-white/10 flex flex-col z-20">
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
                <h3 className="font-bold text-sm tracking-widest text-gray-400 uppercase flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cobalt" />
                    Inspection
                </h3>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>

            <div className="flex-1 p-4 font-mono text-xs text-gray-400 space-y-2 overflow-hidden">
                <div className="flex gap-2 text-green-400/80">
                    <span className="opacity-50">14:02:22</span>
                    <span>System initialized...</span>
                </div>
                <div className="flex gap-2">
                    <span className="opacity-50">14:02:23</span>
                    <span>Loading character anchors...</span>
                </div>
                <div className="flex gap-2">
                    <span className="opacity-50">14:02:24</span>
                    <span><span className="text-cobalt">Gemini 2.0</span> connected.</span>
                </div>
            </div>
        </aside>
    );
};

export default Inspector;
