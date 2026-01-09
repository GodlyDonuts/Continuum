export interface Anchor {
    id: string;
    label: string;
    index: number;
    status: 'active' | 'inactive' | 'pending';
}

export interface EnvState {
    id: string;
    label: string;
    value: string;
    code: string;
}

export interface LogEntry {
    id: string;
    timestamp: string;
    type: 'INFO' | 'WARN' | 'ERR' | 'INIT';
    message: string;
    agent?: string;
}

export interface AgentStep {
    id: string;
    agent: string;
    action: string;
    status: 'pending' | 'active' | 'complete';
    confidence?: number;
}

export interface Directive {
    id: string;
    type: 'user' | 'ai';
    content?: string; // For user messages
    steps?: AgentStep[]; // For AI multi-agent responses
    timestamp: string;
    targetId?: string;
}

export interface SequenceNode {
    id: string;
    hashId: string;
    status: 'locked' | 'processing' | 'pending';
    label?: string;
}

export interface TimelineEvent {
    id: string;
    message: string;
    timestamp: string;
    type?: 'directive';
}

export interface AgentStatus {
    id: string;
    name: string;
    status: 'active' | 'standby' | 'offline';
    color: string;
}

export interface StageMetrics {
    x: number;
    y: number;
    z: number;
    bufferHealth: number;
}
