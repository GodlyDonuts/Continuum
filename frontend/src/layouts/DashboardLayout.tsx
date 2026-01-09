import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Stage from '../components/Stage';
import Timeline from '../components/Timeline';
import Inspector from '../components/Inspector';
import { RefactorAlert } from '../components/wow/RefactorAlert';

const DashboardLayout = () => {
    // Demo state for Refactor Alert
    const [refactorActive, setRefactorActive] = useState(false);

    useEffect(() => {
        // Trigger the alert every 10 seconds for demo
        const interval = setInterval(() => {
            setRefactorActive(true);
            setTimeout(() => setRefactorActive(false), 3000);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex h-screen w-screen bg-obsidian overflow-hidden text-white font-sans selection:bg-cobalt/30 relative">
            <RefactorAlert active={refactorActive} />

            {/* 1. Left Sidebar (Fixed) */}
            <Sidebar />

            {/* 2. Middle Column (Stage + Timeline) */}
            <div className="flex-1 flex flex-col relative z-10">
                <Stage />
                <Timeline />
            </div>

            {/* 3. Right Sidebar (Fixed) */}
            <Inspector />

            {/* Global Background Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-cobalt/5 via-transparent to-transparent opacity-50 pointer-events-none z-0" />
        </div>
    );
};

export default DashboardLayout;
