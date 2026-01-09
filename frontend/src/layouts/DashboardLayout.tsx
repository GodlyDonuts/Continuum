import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Stage from '../components/Stage';
import Timeline from '../components/Timeline';
import Inspector from '../components/Inspector';
import { RefactorAlert } from '../components/wow/RefactorAlert';

const DashboardLayout = () => {
    // Demo state for Refactor Alert
    // const [refactorActive, setRefactorActive] = useState(false);
    const [refactorActive] = useState(false);

    // Demo interval removed per user request

    return (
        <div className="flex h-screen w-screen bg-gallery overflow-hidden text-gray-900 font-sans selection:bg-indigo/10 relative">
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

            {/* Global Background Glow - Subtle Light Mode Lift */}
            <div className="absolute inset-0 bg-gradient-radial from-indigo/5 via-transparent to-transparent opacity-40 pointer-events-none z-0" />
        </div>
    );
};

export default DashboardLayout;
