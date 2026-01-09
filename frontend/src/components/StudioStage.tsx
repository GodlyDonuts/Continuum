import { useState } from 'react';
import { Upload, Play, Pause, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StudioStageProps {
    isLive: boolean;
    onIngest: () => void;
}

const StudioStage = ({ isLive, onIngest }: StudioStageProps) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [headerHovered, setHeaderHovered] = useState(false);

    return (
        <div className="h-full w-full bg-black relative overflow-hidden group film-grain">
            <AnimatePresence mode="wait">
                {!isLive ? (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-gallery-white text-black z-20"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                            e.preventDefault();
                            onIngest();
                        }}
                    >
                        <div className="w-64 h-32 border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center mb-4 transition-colors hover:border-international-orange hover:bg-orange-50/10 cursor-pointer" onClick={onIngest}>
                            <Upload className="w-6 h-6 text-gray-400 mb-2" strokeWidth={1.5} />
                            <span className="text-sm font-medium text-gray-500">Drop script or video</span>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="live"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center bg-black z-10"
                        onMouseEnter={() => setHeaderHovered(true)}
                        onMouseLeave={() => setHeaderHovered(false)}
                    >
                        {/* Anamorphic Container 2.39:1 */}
                        <div className="w-full relative aspect-[2.39/1] max-w-6xl mx-auto bg-black overflow-hidden shadow-2xl ring-1 ring-white/5">
                            {/* Video Placeholder */}
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
                                className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-90' : 'opacity-60'}`}
                                alt="Studio Output"
                            />

                            {/* Grain Overlay specific to video */}
                            <div className="absolute inset-0 film-grain mix-blend-overlay opacity-30 pointer-events-none"></div>

                            {/* Status Overlay */}
                            <div className="absolute top-6 right-6 flex items-center gap-2 z-30">
                                <div className="w-1.5 h-1.5 rounded-full bg-international-orange animate-pulse"></div>
                                <span className="text-[9px] font-bold tracking-widest text-white uppercase shadow-sm">Live Production</span>
                            </div>
                        </div>

                        {/* Floating Controls (Hover Only) */}
                        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 z-30 ${headerHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <button className="text-white hover:text-international-orange transition-colors" onClick={() => setIsPlaying(!isPlaying)}>
                                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                            </button>
                            <div className="w-64 h-0.5 bg-white/20 rounded-full overflow-hidden">
                                <div className="h-full bg-international-orange w-1/3"></div>
                            </div>
                            <span className="text-[10px] font-mono text-white/80">00:14:02</span>
                            <Maximize2 className="w-4 h-4 text-white hover:text-international-orange transition-colors cursor-pointer" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default StudioStage;
