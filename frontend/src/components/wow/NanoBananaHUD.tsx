

export const NanoBananaHUD = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-30">
            {/* Technical Target Box */}
            <div className="absolute top-1/3 left-1/2 w-48 h-32 -translate-x-1/2">
                {/* Sharp Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/80" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/80" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/80" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/80" />

                {/* Center Crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-white/10"></div>

                {/* Callout Line to Sidebar */}
                <div className="absolute top-0 right-0 w-32 h-[1px] bg-white/40 origin-left rotate-[-15deg] translate-x-3 translate-y-3"></div>
                <div className="absolute top-[-30px] right-[-140px] text-white/80 font-mono text-[9px] bg-black/50 px-1">
                    OBJ: SHIRT_LOGO
                </div>

                {/* Technical Label */}
                <div className="absolute -bottom-6 left-0 flex gap-4 font-mono text-[9px] text-white/60">
                    <span>DY: +0.024</span>
                    <span>DX: -0.012</span>
                </div>

                {/* Status */}
                <div className="absolute -top-6 left-0 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange animate-pulse"></div>
                    <span className="font-mono text-[9px] text-white/80 tracking-widest">TRACKING_LOCK</span>
                </div>
            </div>
        </div>
    );
};
