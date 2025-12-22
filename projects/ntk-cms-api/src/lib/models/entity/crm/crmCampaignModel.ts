import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
export class CrmCampaignModel extends BaseModuleEntity<string> {
  name: string;
  campaignType: string;
  status: string;
  startDate?: Date;
  endDate?: Date;
  budget?: number;
  actualCost?: number;
  expectedRevenue?: number;
  actualRevenue?: number;
  expectedResponse?: number;
  actualResponse?: number;
  description: string;
  notes: string;
}


