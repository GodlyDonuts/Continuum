import { motion } from 'framer-motion';

export const ThoughtSignature = () => {
    return (
        <div className="relative group cursor-pointer bg-white px-2 py-1">

            {/* Chronicle Pin */}
            <motion.div
                className="w-4 h-4 rounded-full border-2 border-cool-grey bg-white relative z-10 flex items-center justify-center transition-colors group-hover:border-indigo-500"
                whileHover={{ scale: 1.2 }}
            >
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Tooltip - Scientific Tag */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-30">
                <div className="bg-gray-900 text-white px-3 py-1.5 rounded shadow-xl text-[10px] whitespace-nowrap font-mono flex flex-col items-center">
                    <span className="text-gray-400 text-[8px] uppercase tracking-wider">Logic Node</span>
                    <span>#AF-22-SIG</span>
                    <div className="w-2 h-2 bg-gray-900 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                </div>
            </div>

            {/* Hover Vertical Line */}
            <div className="absolute top-full left-1/2 w-[1px] h-8 bg-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    );
};
