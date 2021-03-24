import { AppUser } from "./appUser";
import { User } from "./user";

export interface Project {
    projectId: number;
    projectNumber?: string;
    projectName?: string;
    plot?: string;
    block?: string;
    timeEstimated?: number;
    timeExecuted?: number;
    description?: string;
    site?: string;
    area?: number;
    department?: string;
    pickUpDate?: Date;
    sentDate?: Date;
    notes?: string;
    updateDate?: Date;
    createDate: Date;
    createBy: number;
    updateBy: number;
    status?: string;
    userProject: AppUser[];
  }