export enum Role {
  CallTaker = "Call Taker",
  Dispatcher = "Dispatcher",
  FieldOfficer = "Field Officer",
  IncidentCommander = "Incident Commander",
  Supervisor = "Supervisor",
}

export enum IncidentType {
  Medical = "Medical Emergency",
  Fire = "Fire Incident",
  Police = "Police Assistance",
  Traffic = "Traffic Accident",
  Other = "Other",
}

export interface Call {
  id: string;
  callerName: string;
  callerNumber: string;
  type: IncidentType;
  location: string;
  timestamp: string;
  priority: 'High' | 'Medium' | 'Low';
  notes?: string;
}