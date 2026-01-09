import { Activity } from 'lucide-react';
import type { LogEntry, AgentStatus } from '../types';

interface InspectorProps {
    logs?: LogEntry[];
    agents?: AgentStatus[];
    variance?: number; // 0 to 1
}

const Inspector = ({ logs = [], agents = [], variance = 0 }: InspectorProps) => {
    return (
        <aside className="w-96 h-full bg-cardstock border-l border-charcoal/10 flex flex-col z-20 font-mono text-[11px] text-charcoal/80">
            <div className="p-3 border-b border-charcoal/10 flex items-center justify-between bg-charcoal text-cardstock">
                <h3 className="font-bold tracking-widest uppercase flex items-center gap-2">
                    <Activity className="w-3 h-3 text-orange" />
                    AUDIT_LOG
                </h3>
                <span className={`px-1.5 py-0.5 font-bold text-[9px] rounded-sm ${variance > 0.1 ? 'bg-orange text-white' : 'bg-stone/20 text-stone'}`}>
                    {variance > 0.1 ? 'VARIANCE_DETECTED' : 'OPTIMAL'}
                </span>
            </div>

            <div className="flex-1 p-4 space-y-6 overflow-hidden">

                {/* Active Agents Block */}
                <div>
                    <div className="text-[9px] font-bold text-stone uppercase mb-2 tracking-widest">Active Agents</div>
                    <div className="flex flex-col gap-1">
                        {agents.length === 0 ? (
                            <div className="text-stone italic text-[10px] bg-charcoal/5 p-2 rounded-sm text-center">NO_AGENTS_ONLINE</div>
                        ) : (
                            agents.map(agent => (
                                <div key={agent.id} className="flex justify-between border border-charcoal/10 p-2 bg-white rounded-sm">
                                    <span className="font-bold">{agent.name}</span>
                                    <span className={`font-bold ${agent.status === 'active' ? 'text-orange' : 'text-stone'}`}>{agent.status.toUpperCase()}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Consistency Graph */}
                <div>
                    <div className="text-[9px] font-bold text-stone uppercase mb-2 tracking-widest">Continuum Variance</div>
                    <div className="h-24 bg-white border border-charcoal/10 relative p-2 flex items-end justify-center">
                        {variance === 0 ? (
                            <div className="text-stone/30 text-[9px] text-center w-full self-center">
                                NO_VARIANCE_DATA
                            </div>
                        ) : (
                            // Placeholder for dynamic SVG based on variance input
                            <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                                <path d="M0,45 L100,45" stroke="#A1A1A1" strokeWidth="0.5" strokeDasharray="2 2" />
                            </svg>
                        )}
                    </div>
                </div>

                {/* Live Logs */}
                <div>
                    <div className="text-[9px] font-bold text-stone uppercase mb-2 tracking-widest">System Output</div>
                    <div className="space-y-2 border-l border-charcoal/20 pl-3">
                        {logs.length === 0 ? (
                            <div className="text-stone italic text-[10px]">AWAITING_LOG_STREAM...</div>
                        ) : (
                            logs.map(log => (
                                <div key={log.id}>
                                    <div className="flex gap-2 mb-0.5 text-stone text-[9px]">
                                        <span>{log.timestamp}</span>
                                        <span>[{log.type}]</span>
                                    </div>
                                    <div className="text-charcoal font-medium leading-tight">{log.message}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="p-2 border-t border-charcoal/10 bg-charcoal/5 font-mono text-[9px] text-stone flex justify-between">
                <span>X: 0000</span>
                <span>Y: 0000</span>
                <span>Z: 0000</span>
            </div>
        </aside>
    );
};

export default Inspector;
