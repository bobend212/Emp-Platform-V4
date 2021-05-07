import { Project } from './project';

export interface AppUser {
  id: number;
  userName: string;
  firstName: string;
  lastName?: string;
  initials?: string;
  department?: string;
  email?: string;
  phone?: string;
  homeOffice?: string;
  hireDate: Date;
  supervisor?: any;
  updateDate: string;
  age: number;
  dateOfBirth: Date;
  createDate: Date;
  lastActive: Date;
  gender?: string;
  userProject: Project[];
}
