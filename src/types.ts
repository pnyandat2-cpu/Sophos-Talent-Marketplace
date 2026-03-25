export enum EmployeeStatus {
  ACTIVE = 'Active',
  ON_LEAVE = 'On Leave',
  TERMINATED = 'Terminated',
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  department: string;
  location: string;
  email: string;
  phone: string;
  managerId?: string;
  avatarUrl: string;
  status: EmployeeStatus;
  hireDate: string;
  performanceRating: number;
}

export interface Goal {
  id: string;
  employeeId: string;
  title: string;
  description: string;
  progress: number;
  dueDate: string;
  status: 'Not Started' | 'In Progress' | 'Completed' | 'Overdue';
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  duration: string;
  progress: number;
  thumbnail: string;
}

export interface DashboardTile {
  id: string;
  title: string;
  type: 'todo' | 'chart' | 'info' | 'action';
  content: any;
}

export interface JobRequisition {
  id: string;
  title: string;
  reqId: string;
  hiringManager: string;
  candidatesCount: number;
  newCandidatesCount: number;
  ageDays: number;
  status: string;
  postings: string[];
}

export interface Candidate {
  id: string;
  name: string;
  isNew: boolean;
  status: string;
  rating: number;
  source: string;
  candidateSource: string;
  avatarUrl: string;
}
