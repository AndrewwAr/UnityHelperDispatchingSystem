import { Call, IncidentType } from '../../types';

export const initialCalls: Call[] = [
  {
    id: 'C001',
    callerName: 'Ahmed Al-Thani',
    callerNumber: '+974 5555 1234',
    type: IncidentType.Traffic,
    location: 'Doha Expressway, near Al Waab interchange',
    timestamp: '2m ago',
    priority: 'High',
    notes: 'Two-car collision, possible injuries. Northbound lane blocked.'
  },
  {
    id: 'C002',
    callerName: 'Fatima Al-Marri',
    callerNumber: '+974 3333 5678',
    type: IncidentType.Medical,
    location: 'City Center Mall, 2nd floor food court',
    timestamp: '5m ago',
    priority: 'High',
    notes: 'Elderly male collapsed, conscious but having difficulty breathing.'
  },
  {
    id: 'C003',
    callerName: 'Unknown',
    callerNumber: 'Private Number',
    type: IncidentType.Police,
    location: 'Al Rayyan Park',
    timestamp: '12m ago',
    priority: 'Medium',
    notes: 'Reports of suspicious activity near the west entrance.'
  },
   {
    id: 'C004',
    callerName: 'Yusuf Mohamed',
    callerNumber: '+974 7777 9012',
    type: IncidentType.Fire,
    location: 'Industrial Area, Street 15, Building 42',
    timestamp: '15m ago',
    priority: 'Medium',
    notes: 'Smoke seen coming from a warehouse. No flames visible from the outside.'
  },
  {
    id: 'C005',
    callerName: 'Layla Hassan',
    callerNumber: '+974 6666 3456',
    type: IncidentType.Other,
    location: 'The Pearl-Qatar, Porto Arabia, Parcel 5',
    timestamp: '25m ago',
    priority: 'Low',
    notes: 'A cat is stuck in a tall tree. Owner is distressed.'
  },
];