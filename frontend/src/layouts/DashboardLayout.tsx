import { useState, useRef, useCallback } from 'react';
import StudioStage from '../components/StudioStage';
import StudioDirector from '../components/StudioDirector';
import type { Directive } from '../types';

const DashboardLayout = () => {
    const [isLive, setIsLive] = useState(false);
    const [directives, setDirectives] = useState<Directive[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);

    // Splitter Logic
    const [leftWidth, setLeftWidth] = useState(50); // percentage
    const splitRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = leftWidth;

        const handleMouseMove = (mouseMoveEvent: MouseEvent) => {
            const newWidth = startWidth + ((mouseMoveEvent.clientX - startX) / window.innerWidth) * 100;
            // Constrain between 20% and 80%
            setLeftWidth(Math.min(Math.max(newWidth, 20), 80));
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, [leftWidth]);

    const handleIngest = () => {
        setIsLive(true);
        setIsProcessing(true);
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
            setIsProcessing(false);
        }, 800);
    };

    const handleSendDirective = (text: string) => {
        setIsProcessing(true);
        // 1. Add User Message
        const userMsg: Directive = {
            id: Date.now().toString(),
            type: 'user',
            content: text,
            timestamp: new Date().toLocaleTimeString()
        };
        setDirectives(prev => [...prev, userMsg]);

        // 2. Simulate AI Response with Metadata Tags
        setTimeout(() => {
            const aiMsg: Directive = {
                id: (Date.now() + 1).toString(),
                type: 'ai',
                timestamp: new Date().toLocaleTimeString(),
                steps: [
                    {
                        id: 's1',
                        agent: 'GEMINI_3_PRO',
                        action: `Approaching context: "${text}". [PERSISTED: SCENE_01_CTX]`,
                        status: 'complete'
                    },
                    {
                        id: 's2',
                        agent: 'NANO_BANANA_PRO',
                        action: 'Refactoring composition. [ANCHOR: ELARA_VANCE]',
                        status: 'active'
                    }
                ]
            };
            setDirectives(prev => [...prev, aiMsg]);
            setIsProcessing(false);
        }, 1500);
    };

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-gallery-white font-sans text-black select-none">

            {/* Left Pane: The Stage */}
            <div style={{ width: `${leftWidth}%` }} className="h-full relative z-10">
                <StudioStage isLive={isLive} onIngest={handleIngest} />
            </div>

            {/* Draggable Divider with Shimmer */}
            <div
                ref={splitRef}
                className={`w-[1px] h-full bg-[#EDEDED] cursor-col-resize hover:bg-international-orange/50 transition-colors relative z-20 flex flex-col justify-center items-center group ${isProcessing ? 'shimmer-loader' : ''}`}
                onMouseDown={handleMouseDown}
            >
                {/* Hit area for easier grabbing */}
                <div className="absolute inset-y-0 -left-2 -right-2 bg-transparent z-30"></div>

                {/* Visual handle */}
                <div className="w-1 h-8 bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Right Pane: The Director */}
            <div style={{ width: `${100 - leftWidth}%` }} className="h-full relative z-10">
                <StudioDirector directives={directives} onSend={handleSendDirective} isProcessing={isProcessing} />
            </div>

        </div>
    );
};

export default DashboardLayout;
