import { useState } from 'react';
import StudioStage from '../components/StudioStage';
import StudioDirector from '../components/StudioDirector';
import type { Directive } from '../types';

const DashboardLayout = () => {
    const [isLive, setIsLive] = useState(false);
    const [directives, setDirectives] = useState<Directive[]>([]);

    const handleIngest = () => {
        setIsLive(true);
        // Add initial context/greeting from AI
        setTimeout(() => {
            setDirectives([
                {
                    id: 'init',
                    type: 'ai',
                    timestamp: new Date().toLocaleTimeString(),
                    steps: [
                        { id: '1', agent: 'GEMINI_3_PRO', action: 'Video ingested. Scene 01 ready for direction.', status: 'complete' }
                    ]
                }
            ]);
        }, 800);
    };

    const handleSendDirective = (text: string) => {
        // 1. Add User Message
        const userMsg: Directive = {
            id: Date.now().toString(),
            type: 'user',
            content: text,
            timestamp: new Date().toLocaleTimeString()
        };
        setDirectives(prev => [...prev, userMsg]);

        // 2. Simulate AI Response (Simplified)
        setTimeout(() => {
            const aiMsg: Directive = {
                id: (Date.now() + 1).toString(),
                type: 'ai',
                timestamp: new Date().toLocaleTimeString(),
                steps: [
                    {
                        id: 's1',
                        agent: 'GEMINI_3_PRO',
                        action: `Understood. Analyzing "${text}" for scene context...`,
                        status: 'complete'
                    },
                    {
                        id: 's2',
                        agent: 'NANO_BANANA_PRO',
                        action: 'Adjusting scene parameters. Rendering update...',
                        status: 'active'
                    }
                ]
            };
            setDirectives(prev => [...prev, aiMsg]);
        }, 1000);
    };

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-gallery-white font-sans text-black">

            {/* Left Pane: The Stage (50%) */}
            <div className="w-1/2 h-full border-r border-gray-200">
                <StudioStage isLive={isLive} onIngest={handleIngest} />
            </div>

            {/* Right Pane: The Director (50%) */}
            <div className="w-1/2 h-full">
                <StudioDirector directives={directives} onSend={handleSendDirective} />
            </div>

        </div>
    );
};

export default DashboardLayout;
