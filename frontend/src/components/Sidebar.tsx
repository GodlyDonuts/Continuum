import { Share2, Map, Database, Fingerprint, Activity, AlertCircle } from 'lucide-react';
import type { Anchor, EnvState } from '../types';

interface SidebarProps {
    anchors?: Anchor[];
    envState?: EnvState[];
}

const Sidebar = ({ anchors = [], envState = [] }: SidebarProps) => {
    return (
        <aside className="w-80 h-full glass-satin border-r border-white/50 flex flex-col z-20 shadow-2xl relative">
            {/* 1. Header Area: Project Info */}
            <div className="p-6 pb-2">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-charcoal rounded-sm flex items-center justify-center shadow-lg">
                        <Share2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <h1 className="font-sans font-bold text-lg tracking-tight leading-none text-charcoal">CONTINUUM</h1>
                        <p className="font-mono text-[9px] text-stone tracking-widest mt-1">V3.0 // ACTIVE_PRODUCTION</p>
                    </div>
                </div>
            </div>

            {/* 2. Scrollable Content Stream */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-6 space-y-8">

                {/* SECTION: Visual Anchors */}
                <section>
                    <div className="flex items-center justify-between mb-4 border-b border-charcoal/10 pb-1">
                        <h2 className="font-sans font-bold text-xs tracking-widest text-charcoal/60 uppercase flex items-center gap-2">
                            <Fingerprint className="w-3 h-3" />
                            Subject Anchors
                        </h2>
                        <span className="text-[9px] font-mono text-optic-cyan bg-optic-cyan/10 px-1 py-0.5 rounded-sm">LIVE</span>
                    </div>

                    {anchors.length === 0 ? (
                        <div className="h-24 border border-dashed border-charcoal/20 rounded-sm flex items-center justify-center text-[10px] font-mono text-charcoal/40 bg-charcoal/5">
                            NO_ANCHOR_DATA_STREAM
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {anchors.map((anchor) => (
                                <div key={anchor.id} className="group">
                                    {/* Anchor Card */}
                                    <div className="bg-white/60 border border-white/60 p-3 rounded-sm shadow-sm hover:border-optic-cyan/50 transition-colors">
                                        <div className="flex gap-3">
                                            {/* Thumbnail */}
                                            <div className="w-12 h-12 bg-charcoal rounded-sm overflow-hidden relative shadow-inner">
                                                {anchor.thumbnail ? (
                                                    <img src={anchor.thumbnail} className="w-full h-full object-cover" alt="Subject" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-white/20 font-mono text-[8px]">NO_IMG</div>
                                                )}
                                                {/* Resemblance Tag */}
                                                {anchor.resemblance && (
                                                    <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm text-[8px] font-mono text-white text-center py-0.5">
                                                        {anchor.resemblance}%
                                                    </div>
                                                )}
                                            </div>

                                            {/* Info */}
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start">
                                                    <h3 className="font-sans font-bold text-sm text-charcoal">{anchor.label}</h3>
                                                    <div className={`w-1.5 h-1.5 rounded-full ${anchor.status === 'active' ? 'bg-optic-cyan shadow-[0_0_5px_#00E5FF]' : 'bg-stone'}`}></div>
                                                </div>
                                                <div className="font-mono text-[9px] text-stone mt-1">ID: {anchor.id} // IDX: {anchor.index}</div>
                                            </div>
                                        </div>

                                        {/* State List */}
                                        {anchor.physicalState && anchor.physicalState.length > 0 && (
                                            <div className="mt-3 pt-2 border-t border-charcoal/5 grid gap-1">
                                                {anchor.physicalState.map((state, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-[10px] font-mono text-slate/80">
                                                        <Activity className="w-3 h-3 text-cinnabar" />
                                                        {state}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* SECTION: Environment Telemetry */}
                <section>
                    <div className="flex items-center justify-between mb-4 border-b border-charcoal/10 pb-1">
                        <h2 className="font-sans font-bold text-xs tracking-widest text-charcoal/60 uppercase flex items-center gap-2">
                            <Map className="w-3 h-3" />
                            Env Telemetry
                        </h2>
                    </div>

                    {envState.length === 0 ? (
                        <div className="bg-charcoal/5 p-4 rounded-sm border border-charcoal/10">
                            <div className="flex items-center gap-2 text-charcoal/40 mb-2">
                                <AlertCircle className="w-4 h-4" />
                                <span className="text-[10px] font-mono font-bold">AWAITING_ENV_TELEMETRY</span>
                            </div>
                            <div className="h-1 w-full bg-charcoal/10 rounded-full overflow-hidden">
                                <div className="h-full w-1/3 bg-charcoal/20 animate-pulse"></div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {envState.map((state) => (
                                <div key={state.id} className="flex items-center justify-between bg-white/40 px-3 py-2 rounded-sm border border-white/50">
                                    <span className="font-mono text-[10px] text-stone uppercase">{state.label}</span>
                                    <span className="font-mono text-[10px] font-bold text-charcoal">{state.value}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Bottom Metadata */}
                <div className="pt-8 opacity-40">
                    <div className="flex items-center gap-2 font-mono text-[9px] text-charcoal/60 mb-2">
                        <Database className="w-3 h-3" />
                        <span>WORLD_BIBLE_V4.2.0</span>
                    </div>
                    <p className="font-serif italic text-[10px] text-charcoal leading-relaxed">
                        "Continuity is the backbone of belief."
                    </p>
                </div>

            </div>
        </aside>
    );
};

export default Sidebar;
