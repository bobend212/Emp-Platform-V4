import { AppUser } from "./appUser";
import { User } from "./user";

export interface Project {
    projectId: number;
    projectNumber?: string;
    projectName?: string;
    status?: string;

    plot?: string;
    block?: string;
    site?: string;

    description?: string;
    comments?: string;

    updateDate?: Date;
    createDate: Date;

    orderPlaced?: Date;
    designInfo?: string;
    drgsReceived?: boolean;
    engReceived?: boolean;
    slabStageStatus?: string;
    bRegsStageStatus?: string;
    productionStageStatus?: string;
    issued?: boolean;

    slabRequiredDate?: Date;
    slabIssuedDate?: Date;
    bRegsRequiredDate?: Date;
    bRegsIssuedDate?: Date;
    fullSetRequiredDate?: Date;
    fullSetIssuedDate?: Date;
    issuingRequiredDate?: Date;
    issuingIssuedDate?: Date;
    deliveryDate?: Date;

    userProject: AppUser[];
  }