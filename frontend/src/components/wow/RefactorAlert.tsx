import { AnimatePresence, motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface RefactorAlertProps {
    active: boolean;
    message?: string;
    code?: string;
}

export const RefactorAlert = ({ active, message = "Continuity Variance Detected", code = "ERR_CODE: 0x00_NULL" }: RefactorAlertProps) => {
    return (
        <AnimatePresence>
            {active && (
                <div className="absolute inset-0 pointer-events-none z-50 flex items-start justify-center pt-24 bg-charcoal/10 backdrop-blur-[1px]">

                    {/* Industrial Warning Card - High Contrast Orange */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        className="bg-orange w-full max-w-lg shadow-none border border-black/20"
                    >
                        <div className="flex items-stretch">
                            {/* Icon Section */}
                            <div className="bg-black/10 px-4 flex items-center justify-center border-r border-black/10">
                                <AlertTriangle className="w-6 h-6 text-white" strokeWidth={2.5} />
                            </div>

                            {/* Content Section */}
                            <div className="p-3 flex-1 flex justify-between items-center text-white">
                                <div>
                                    <div className="font-bold tracking-tight uppercase text-sm">{message}</div>
                                    <div className="font-mono text-[10px] opacity-80 mt-0.5">{code}</div>
                                </div>
                                <div className="text-2xl font-mono font-bold opacity-20">!!!</div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1 bg-black/20 w-full">
                            <motion.div
                                className="h-full bg-white"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.5, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
