import { motion } from 'framer-motion';

export const ThoughtSignature = () => {
    return (
        <div className="relative group cursor-pointer">
            {/* Visual Thread */}
            <div className="absolute top-1/2 -left-full w-full h-[1px] bg-gradient-to-r from-transparent to-cobalt opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Core Node */}
            <motion.div
                className="w-3 h-3 rounded-full bg-cobalt shadow-[0_0_10px_rgba(66,133,244,0.5)] border border-white/20 relative z-10"
                whileHover={{ scale: 1.5, borderColor: '#fff' }}
            >
                <div className="absolute inset-0 rounded-full bg-cobalt animate-ping opacity-75" />
            </motion.div>

            {/* Tooltip logic could go here */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal border border-white/10 px-2 py-1 rounded text-[10px] whitespace-nowrap z-20 pointer-events-none">
                Logic Node: #AF-22
            </div>
        </div>
    );
};
