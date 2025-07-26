import type React from 'react';
import { Role } from './types';

export interface RoleInfo {
  name: Role;
  description: string;
  icon: React.ReactNode;
}

const HeadsetIcon = (
    <img src="https://icon-library.com/images/call-center-icon/call-center-icon-25.jpg" alt="Call Taker Icon" className="w-full h-full object-contain" />
);

const DispatcherIcon = (
    <img src="https://static.vecteezy.com/system/resources/thumbnails/015/890/826/small/video-class-icon-outline-online-teacher-vector.jpg" alt="Dispatcher Icon" className="w-full h-full object-contain" />
);

const FieldOfficerIcon = (
    <img src="https://cdn-icons-png.freepik.com/512/97/97392.png" alt="Field Officer Icon" className="w-full h-full object-contain" />
);

const IncidentCommanderIcon = (
    <img src="https://static.thenounproject.com/png/incident-commander-icon-6623366-512.png" alt="Incident Commander Icon" className="w-full h-full object-contain" />
);

const SupervisorIcon = (
    <img src="https://static.vecteezy.com/system/resources/previews/047/526/087/non_2x/supervisor-icon-outline-flat-icon-vector.jpg" alt="Supervisor Icon" className="w-full h-full object-contain" />
);

export const ROLES: RoleInfo[] = [
    {
        name: Role.CallTaker,
        description: "Receive emergency and non-emergency calls, gather critical information, and provide initial assistance.",
        icon: HeadsetIcon,
    },
    {
        name: Role.Dispatcher,
        description: "Prioritize and dispatch appropriate units to incidents, manage radio traffic, and track unit status.",
        icon: DispatcherIcon,
    },
    {
        name: Role.FieldOfficer,
        description: "Respond to dispatched calls, manage incidents on-site, and report real-time status updates.",
        icon: FieldOfficerIcon,
    },
    {
        name: Role.IncidentCommander,
        description: "Assume overall command of major incidents, coordinate multi-agency responses, and manage resources.",
        icon: IncidentCommanderIcon,
    },
    {
        name: Role.Supervisor,
        description: "Oversee operations, monitor performance, manage personnel, and handle escalated situations.",
        icon: SupervisorIcon,
    },
];