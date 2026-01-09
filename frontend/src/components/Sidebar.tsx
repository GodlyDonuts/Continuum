import { BookTemplate } from 'lucide-react';

const Sidebar = () => {
    return (
        <aside className="w-80 h-full glass border-r border-white/10 flex flex-col z-20">
            <div className="p-6 border-b border-white/5">
                <h1 className="text-xl font-bold font-sans tracking-tight flex items-center gap-2">
                    <span className="text-gradient">CONTINUUM</span>
                    <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-gray-400">V1.0</span>
                </h1>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                <div className="space-y-2">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">World Bible</h3>
                    <nav className="space-y-1">
                        {['Character Anchors', 'Global State'].map((item) => (
                            <button key={item} className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3 group">
                                <BookTemplate className="w-4 h-4 text-gray-600 group-hover:text-cobalt transition-colors" />
                                {item}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
