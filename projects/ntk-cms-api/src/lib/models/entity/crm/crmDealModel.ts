import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
export class CrmDealModel extends BaseModuleEntity<string> {
  name: string;
  linkOpportunityId?: string;
  linkAccountId?: string;
  linkContactId?: string;
  linkPipelineId?: string;
  linkStageId?: string;
  amount?: number;
  currency: string;
  expectedCloseDate?: Date;
  actualCloseDate?: Date;
  stage: string;
  status: string;
  probability?: number;
  lostReason: string;
  description: string;
  notes: string;
  linkAssignedUserId?: number;
  otherDataJson: string;
}


