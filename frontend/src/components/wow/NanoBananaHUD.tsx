import { motion } from 'framer-motion';

export const NanoBananaHUD = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-30">
            {/* Example Heatmap Area - Clean lines over glowing blobs */}
            <motion.div
                className="absolute top-1/3 left-1/2 w-48 h-32 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {/* Brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white shadow-sm" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white shadow-sm" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white shadow-sm" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white shadow-sm" />

                {/* Center Target */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
                    <div className="absolute inset-0 border border-white/50 rounded-full animate-ping" />
                    <div className="absolute inset-0 border border-white rounded-full scale-50" />
                </div>

                {/* Label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 px-2 py-1 rounded text-[10px] text-white font-mono flex items-center gap-2 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    EDIT_TARGET: SHIRT_LOGO
                </div>
            </motion.div>
        </div>
    );
};
