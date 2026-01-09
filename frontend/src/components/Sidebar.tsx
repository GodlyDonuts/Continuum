import { Database } from 'lucide-react';

const Sidebar = () => {
    return (
        <aside className="w-80 h-full bg-cardstock border-r border-charcoal/10 flex flex-col z-20 font-mono text-[11px] text-charcoal/80">
            {/* Header */}
            <div className="p-3 border-b border-charcoal/10 flex items-center justify-between bg-cardstock">
                <h1 className="font-bold tracking-tight text-charcoal flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange rounded-full"></span>
                    CONTINUUM_DB
                </h1>
                <span className="text-[10px] text-stone">VER. 2.4.1</span>
            </div>

            <div className="flex-1 overflow-y-auto">
                {/* Table Header */}
                <div className="grid grid-cols-[40px_1fr_60px] px-3 py-1.5 bg-charcoal/5 border-b border-charcoal/10 font-bold text-stone">
                    <div>ID</div>
                    <div>SUBJECT</div>
                    <div className="text-right">INDEX</div>
                </div>

                {/* Data Rows - Character Anchors */}
                <div className="border-b border-charcoal/5">
                    <div className="px-3 py-1.5 font-bold uppercase tracking-wider text-stone/70 bg-white/30 text-[10px]">Reference Anchors</div>

                    <div className="grid grid-cols-[40px_1fr_60px] px-3 py-2 border-b border-charcoal/5 hover:bg-white transition-colors cursor-pointer group">
                        <div className="text-stone group-hover:text-charcoal">01</div>
                        <div className="font-bold">LEAD: ELARA VANCE</div>
                        <div className="text-right font-mono text-orange">99.8%</div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr_60px] px-3 py-2 border-b border-charcoal/5 hover:bg-white transition-colors cursor-pointer group">
                        <div className="text-stone group-hover:text-charcoal">02</div>
                        <div className="font-bold">PROP: VINTAGE WATCH</div>
                        <div className="text-right font-mono text-charcoal">100%</div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr_60px] px-3 py-2 border-b border-charcoal/5 hover:bg-white transition-colors cursor-pointer group">
                        <div className="text-stone group-hover:text-charcoal">03</div>
                        <div className="font-bold">ENV: RAIN TEXTURE</div>
                        <div className="text-right font-mono text-charcoal">98.2%</div>
                    </div>
                </div>

                {/* Data Rows - Global State */}
                <div className="border-b border-charcoal/5">
                    <div className="px-3 py-1.5 font-bold uppercase tracking-wider text-stone/70 bg-white/30 text-[10px]">Environmental State</div>

                    <div className="grid grid-cols-[40px_1fr] gap-2 px-3 py-2 border-b border-charcoal/5 hover:bg-white transition-colors">
                        <div className="text-stone">LGT</div>
                        <div className="font-bold">LIGHTING: 5600K DUSK</div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-2 px-3 py-2 border-b border-charcoal/5 hover:bg-white transition-colors">
                        <div className="text-stone">CAM</div>
                        <div className="font-bold">35MM // 24FPS // REC.709</div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-2 px-3 py-2 border-b border-charcoal/5 hover:bg-white transition-colors">
                        <div className="text-stone">LOC</div>
                        <div className="font-bold">EXT. NEO-TOKYO STREET</div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="p-2 border-t border-charcoal/10 bg-white/50 text-[10px] text-stone flex items-center justify-between">
                <span>DB STATUS: ONLINE</span>
                <Database className="w-3 h-3 text-stone" />
            </div>
        </aside>
    );
};

export default Sidebar;
