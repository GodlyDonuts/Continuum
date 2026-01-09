export const ThoughtSignature = () => {
    return (
        <div className="relative group cursor-pointer">
            {/* Hexagonal Node */}
            <div className="w-5 h-5 bg-cardstock border border-charcoal/40 flex items-center justify-center transform rotate-45 group-hover:bg-charcoal group-hover:border-charcoal transition-colors duration-0">
                <div className="w-2 h-2 bg-stone transform -rotate-45 group-hover:bg-orange transition-colors duration-0"></div>
            </div>

            {/* Connector Line - Solid Sharp */}
            <div className="absolute top-1/2 left-5 w-4 h-[1px] bg-charcoal/20 z-0"></div>

            {/* Tooltip - Strict Data Block */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 hidden group-hover:block z-30">
                <div className="bg-charcoal text-cardstock px-2 py-1 shadow-none">
                    <div className="text-[8px] font-mono tracking-widest text-stone uppercase">Hash ID</div>
                    <div className="text-[10px] font-mono font-bold text-orange">0x4F2A</div>
                </div>
                {/* Connector to tooltip */}
                <div className="w-[1px] h-3 bg-charcoal mx-auto"></div>
            </div>
        </div>
    );
};
