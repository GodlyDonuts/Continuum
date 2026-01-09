import { Activity } from 'lucide-react';

const Inspector = () => {
    return (
        <aside className="w-96 h-full bg-cardstock border-l border-charcoal/10 flex flex-col z-20 font-mono text-[11px] text-charcoal/80">
            <div className="p-3 border-b border-charcoal/10 flex items-center justify-between bg-charcoal text-cardstock">
                <h3 className="font-bold tracking-widest uppercase flex items-center gap-2">
                    <Activity className="w-3 h-3 text-orange" />
                    AUDIT_LOG
                </h3>
                <span className="px-1.5 py-0.5 bg-orange text-charcoal font-bold text-[9px] rounded-sm">
                    OPTIMAL
                </span>
            </div>

            <div className="flex-1 p-4 space-y-6 overflow-hidden">

                {/* Active Agents Block */}
                <div>
                    <div className="text-[9px] font-bold text-stone uppercase mb-2 tracking-widest">Active Agents</div>
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between border border-charcoal/10 p-2 bg-white rounded-sm">
                            <span className="font-bold">GEMINI_3_PRO</span>
                            <span className="text-orange font-bold">ACTIVE</span>
                        </div>
                        <div className="flex justify-between border border-charcoal/10 p-2 bg-white rounded-sm">
                            <span className="font-bold">NANO_BANANA_PRO</span>
                            <span className="text-stone">STANDBY</span>
                        </div>
                    </div>
                </div>

                {/* Consistency Graph */}
                <div>
                    <div className="text-[9px] font-bold text-stone uppercase mb-2 tracking-widest">Continuum Variance</div>
                    <div className="h-24 bg-white border border-charcoal/10 relative p-2 flex items-end">
                        {/* SVG Line Chart */}
                        <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                            <path d="M0,45 L10,48 L20,40 L30,42 L40,10 L50,45 L60,46 L70,44 L80,45 L90,45 L100,45"
                                fill="none"
                                stroke="#1A1A1A"
                                strokeWidth="0.5" />
                            {/* Spike Indicator */}
                            <circle cx="40" cy="10" r="1.5" fill="#FF4F00" />
                        </svg>
                    </div>
                    <div className="flex justify-between text-[9px] text-stone mt-1">
                        <span>T-10s</span>
                        <span className="text-orange font-bold">VARIANCE DETECTED</span>
                        <span>NOW</span>
                    </div>
                </div>

                {/* Live Logs */}
                <div>
                    <div className="text-[9px] font-bold text-stone uppercase mb-2 tracking-widest">System Output</div>
                    <div className="space-y-2 border-l border-charcoal/20 pl-3">
                        <div>
                            <div className="flex gap-2 mb-0.5 text-stone text-[9px]">
                                <span>14:02:22</span>
                                <span>[INIT]</span>
                            </div>
                            <div className="text-charcoal font-medium leading-tight">Sequence load initialized. Memory buffer verified.</div>
                        </div>
                        <div>
                            <div className="flex gap-2 mb-0.5 text-stone text-[9px]">
                                <span>14:02:24</span>
                                <span>[WARN]</span>
                            </div>
                            <div className="text-charcoal font-medium leading-tight">Minor variance in lighting vector detected. Correction applied.</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="p-2 border-t border-charcoal/10 bg-charcoal/5 font-mono text-[9px] text-stone flex justify-between">
                <span>X: 1920</span>
                <span>Y: 1080</span>
                <span>Z: 0000</span>
            </div>
        </aside>
    );
};

export default Inspector;
