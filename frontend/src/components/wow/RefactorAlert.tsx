import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface RefactorAlertProps {
    active: boolean;
}

export const RefactorAlert = ({ active }: RefactorAlertProps) => {
    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center bg-white/50 backdrop-blur-[2px]"
                >
                    {/* Amber Pulse Border - Edge of Screen */}
                    <div className="absolute inset-0 border-[6px] border-amber-400/30 animate-pulse" />

                    {/* Central Alert Badge - High Contrast */}
                    <motion.div
                        initial={{ y: -20, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        className="bg-white border border-amber-200 px-8 py-4 rounded-2xl flex items-center gap-4 shadow-[0_20px_50px_rgba(245,158,11,0.15)] ring-4 ring-amber-50"
                    >
                        <div className="bg-amber-100 p-2 rounded-full">
                            <AlertCircle className="w-6 h-6 text-amber-600" />
                        </div>

                        <div className="flex flex-col">
                            <span className="font-sans font-bold text-gray-900 tracking-tight text-lg">
                                Continuity Break Detected
                            </span>
                            <span className="font-mono text-amber-600 text-xs tracking-wide">
                                INITIATING REFACTOR SEQUENCE...
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
