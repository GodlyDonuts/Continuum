import { BookTemplate, Sun, Clock } from 'lucide-react';

const Sidebar = () => {
    return (
        <aside className="w-80 h-full bg-paper/50 backdrop-blur-xl border-r border-cool-grey flex flex-col z-20 shadow-[2px_0_20px_rgba(0,0,0,0.02)]">
            <div className="p-6 border-b border-cool-grey/50">
                <h1 className="text-xl font-bold font-sans tracking-tight flex items-center gap-2 text-gray-900">
                    <span className="text-gradient">CONTINUUM</span>
                    <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full border border-indigo-100 font-medium">ARCHITECTURAL</span>
                </h1>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-8">

                {/* World Bible Section */}
                <div className="space-y-4">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2">World Bible</h3>

                    <div className="space-y-3">
                        {/* Character Anchors */}
                        <div className="p-3 bg-white rounded-xl border border-cool-grey shadow-sm group hover:shadow-md transition-all duration-300 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-white shadow-sm" />
                                <div>
                                    <div className="text-sm font-semibold text-gray-800">Protagonist_01</div>
                                    <div className="text-[10px] text-gray-500 font-mono">ID: #ANCHOR-88</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 bg-white rounded-xl border border-cool-grey shadow-sm group hover:shadow-md transition-all duration-300 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-indigo-50 border-2 border-white shadow-sm flex items-center justify-center">
                                    <BookTemplate className="w-4 h-4 text-indigo-500" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-800">Story Bible</div>
                                    <div className="text-[10px] text-gray-500 font-mono">Updated: 14m ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Global State Section */}
                <div className="space-y-4">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2">Global State</h3>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center justify-between px-3 py-2 bg-amber-50 rounded-lg border border-amber-100/50">
                            <div className="flex items-center gap-2">
                                <Sun className="w-3.5 h-3.5 text-amber-500" />
                                <span className="text-xs font-medium text-amber-900">Lighting</span>
                            </div>
                            <span className="text-[10px] font-mono text-amber-700">GOLDEN_HOUR</span>
                        </div>

                        <div className="flex items-center justify-between px-3 py-2 bg-indigo-50 rounded-lg border border-indigo-100/50">
                            <div className="flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5 text-indigo-500" />
                                <span className="text-xs font-medium text-indigo-900">Timeflow</span>
                            </div>
                            <span className="text-[10px] font-mono text-indigo-700">LINEAR</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Director's Note Footer */}
            <div className="p-4 bg-gray-50 border-t border-cool-grey">
                <p className="font-serif italic text-sm text-gray-600 leading-relaxed">
                    "We are sculpting light, not just pixels. Keep the focus on the narrative integrity."
                </p>
                <div className="mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">— Director's Log</div>
            </div>
        </aside>
    );
};

export default Sidebar;
