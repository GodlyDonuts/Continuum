import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import Stage from '../components/Stage';
import Timeline from '../components/Timeline';
import Inspector from '../components/Inspector';

import type { Anchor, Directive } from '../types';

const DashboardLayout = () => {
    // REAL App State
    const [anchors, setAnchors] = useState<Anchor[]>([]);
    const [directives, setDirectives] = useState<Directive[]>([]);
    const [isLive, setIsLive] = useState(false);

    // Wow Factors
    const [activeTarget, setActiveTarget] = useState<{ x: number, y: number } | null>(null);

    // Initial Data Injection (Simulating Ingest)
    const handleIngest = () => {
        setIsLive(true);
        setAnchors([
            { id: '1', label: 'ELARA VANCE', index: 1, status: 'active' },
            { id: '2', label: 'SUBJECT 04', index: 2, status: 'inactive' }
        ]);
    };

    const handleSendDirective = (text: string) => {
        // 1. Add User Directive
        const newDirective: Directive = {
            id: Date.now().toString(),
            type: 'user',
            content: text,
            timestamp: new Date().toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit" })
        };
        setDirectives(prev => [...prev, newDirective]);

        // 2. Trigger "Agentic Connection"
        setActiveTarget({ x: 50, y: 30 });

        // 3. AI Response simulation (Multi-Agent Handoff)
        setTimeout(() => {
            const aiResponse: Directive = {
                id: (Date.now() + 1).toString(),
                type: 'ai',
                timestamp: new Date().toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit" }),
                steps: [
                    {
                        id: 's1',
                        agent: 'GEMINI_3_PRO',
                        action: 'Reasoning: Analyzing facial topology for emotional variance...',
                        status: 'complete',
                        confidence: 0.98
                    },
                    {
                        id: 's2',
                        agent: 'NANO_BANANA_PRO',
                        action: 'Executing: Masking frame 142–180. Adjusting vector weights +0.42.',
                        status: 'active',
                        confidence: 0.85
                    }
                ]
            };
            setDirectives(prev => [...prev, aiResponse]);
            setActiveTarget(null);
        }, 1500);
    };

    return (
        <div className="flex h-screen w-screen bg-cardstock overflow-hidden text-charcoal font-sans selection:bg-orange/20 relative">

            {/* 1. Left Sidebar (Fixed) */}
            <Sidebar anchors={anchors} />

            {/* 2. Middle Column (Stage + Timeline) */}
            <div className="flex-1 flex flex-col relative z-0">
                <Stage
                    sceneTitle="SCENE 14: ALLEYWAY"
                    isLive={isLive}
                    onIngest={handleIngest}
                />
                <Timeline />

                {/* Agentic Leader Line Overlay */}
                <svg className="absolute inset-0 pointer-events-none z-50 overflow-visible">
                    <AnimatePresence>
                        {activeTarget && (
                            <motion.path
                                d={`M 100% 80% Q 90% 80% ${activeTarget.x}% ${activeTarget.y}%`}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                stroke="#E11D48" // Cinnabar
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="5,5"
                            />
                        )}
                    </AnimatePresence>
                    {activeTarget && (
                        <motion.circle
                            cx={`${activeTarget.x}%`}
                            cy={`${activeTarget.y}%`}
                            r="4"
                            fill="#E11D48"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                        />
                    )}
                </svg>
            </div>

            {/* 3. Right Sidebar (Directives Hub) */}
            <Inspector
                directives={directives}
                onSendDirective={handleSendDirective}
            />
        </div>
    );
};

export default DashboardLayout;
