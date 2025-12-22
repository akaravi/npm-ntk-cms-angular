import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
export class CrmActivityModel extends BaseModuleEntity<string> {
  activityType: string;
  subject: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
  duration?: number;
  status: string;
  priority: string;
  outcome: string;
  linkAccountId?: string;
  linkContactId?: string;
  linkLeadId?: string;
  linkOpportunityId?: string;
  linkDealId?: string;
  linkAssignedUserId?: number;
  otherDataJson: string;
}


