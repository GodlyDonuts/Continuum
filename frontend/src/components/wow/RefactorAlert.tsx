import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

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
                    className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center"
                >
                    {/* Amber Pulse Border */}
                    <div className="absolute inset-0 border-[3px] border-amber-500/50 animate-pulse" />

                    {/* Central Alert Badge */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="bg-amber-900/90 backdrop-blur-md border border-amber-500/50 px-6 py-3 rounded-full flex items-center gap-3 shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                    >
                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                        <span className="font-mono text-amber-200 font-bold tracking-wider text-sm">
                            CONTINUITY BREAK DETECTED // REFACTORING
                        </span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
