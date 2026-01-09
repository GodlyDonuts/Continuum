import { motion } from 'framer-motion';

export const NanoBananaHUD = () => {
    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* Example Heatmap Area */}
            <motion.div
                className="absolute top-1/3 left-1/2 w-32 h-32 -translate-x-1/2 border border-cobalt/30 rounded-lg bg-cobalt/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cobalt" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cobalt" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cobalt" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cobalt" />

                <div className="absolute -top-4 left-0 text-[10px] text-cobalt font-mono">
                    EDIT_Target: Shirt_Logo
                </div>
            </motion.div>
        </div>
    );
};
