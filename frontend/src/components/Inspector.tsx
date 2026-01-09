import { Activity, CheckCircle2 } from 'lucide-react';

const Inspector = () => {
    return (
        <aside className="w-96 h-full bg-white border-l border-cool-grey flex flex-col z-20 shadow-[-2px_0_20px_rgba(0,0,0,0.02)]">
            <div className="p-5 border-b border-cool-grey flex items-center justify-between bg-gray-50/50">
                <h3 className="font-bold text-sm tracking-widest text-gray-500 uppercase flex items-center gap-2">
                    <Activity className="w-4 h-4 text-indigo-500" />
                    Technical Audit
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 border border-green-200">
                    SYSTEM_OPTIMAL
                </span>
            </div>

            <div className="flex-1 p-5 font-mono text-xs text-gray-500 space-y-6 overflow-hidden">

                <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase mb-2">Active Agents</div>
                    <div className="flex gap-2 flex-wrap">
                        <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded border border-indigo-100 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                            GEMINI_3_PRO
                        </span>
                        <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded border border-emerald-100 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            NANO_BANANA_PRO
                        </span>
                    </div>
                </div>

                <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase mb-2">Live Logs</div>
                    <div className="space-y-3 pl-3 border-l-2 border-cool-grey/50">
                        <div className="relative">
                            <span className="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-cool-grey"></span>
                            <div className="flex justify-between text-[10px] text-gray-400 mb-0.5">
                                <span>14:02:22</span>
                                <span>[INIT]</span>
                            </div>
                            <div className="text-gray-800">System initialized sequence load.</div>
                        </div>

                        <div className="relative">
                            <span className="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-emerald-400"></span>
                            <div className="flex justify-between text-[10px] text-gray-400 mb-0.5">
                                <span>14:02:24</span>
                                <span>[VERIFIED]</span>
                            </div>
                            <div className="text-gray-800">Character anchor match confirmed (99.8%).</div>
                        </div>
                    </div>
                </div>

                <div className="p-3 bg-gray-50 rounded border border-cool-grey font-sans">
                    <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-bold text-gray-900">Visual Audit Passed</span>
                    </div>
                    <p className="text-gray-500 leading-tight">
                        No continuity errors detected in current frame buffer. Lighting consistency verified.
                    </p>
                </div>

            </div>

            {/* Precision Coordinates Footer */}
            <div className="p-3 border-t border-cool-grey bg-gray-50 text-[10px] font-mono text-gray-400 flex justify-between">
                <span>X: 1920.00</span>
                <span>Y: 1080.00</span>
                <span>Z: 0.00</span>
            </div>
        </aside>
    );
};

export default Inspector;
