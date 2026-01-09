import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Stage from '../components/Stage';
import Timeline from '../components/Timeline';
import Inspector from '../components/Inspector';
import { RefactorAlert } from '../components/wow/RefactorAlert';
import type { Anchor, EnvState, LogEntry, SequenceNode, TimelineEvent, AgentStatus } from '../types';

const DashboardLayout = () => {
    // REAL App State - Currently Empty (Idle State)
    const [anchors] = useState<Anchor[]>([]);
    const [envState] = useState<EnvState[]>([]);
    const [logs] = useState<LogEntry[]>([]);
    const [nodes] = useState<SequenceNode[]>([]);
    const [events] = useState<TimelineEvent[]>([]);
    const [agents] = useState<AgentStatus[]>([]);

    // Alert State - Waiting for real triggers
    const [refactorActive] = useState(false);

    return (
        <div className="flex h-screen w-screen bg-cardstock overflow-hidden text-charcoal font-sans selection:bg-orange/20 relative">
            <RefactorAlert active={refactorActive} />

            {/* 1. Left Sidebar (Fixed) */}
            <Sidebar anchors={anchors} envState={envState} />

            {/* 2. Middle Column (Stage + Timeline) */}
            <div className="flex-1 flex flex-col relative z-10">
                <Stage />
                <Timeline nodes={nodes} events={events} />
            </div>

            {/* 3. Right Sidebar (Fixed) */}
            <Inspector logs={logs} agents={agents} variance={0} />

            {/* Global Background Glow - Removed for Industrial Look */}
            {/* <div className="absolute inset-0 bg-gradient-radial from-indigo/5 via-transparent to-transparent opacity-40 pointer-events-none z-0" /> */}
        </div>
    );
};

export default DashboardLayout;
