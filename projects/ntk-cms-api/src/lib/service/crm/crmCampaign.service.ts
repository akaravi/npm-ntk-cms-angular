import { Injectable } from "@angular/core";
import { FilterModel } from "../../models/entity/base/filterModel";
import { CrmCampaignModel } from "../../models/entity/crm/crmCampaignModel";
import { ApiCmsServerBase } from "../base/apiCmsServerBase.service";

@Injectable()
export class CrmCampaignService extends ApiCmsServerBase<
  CrmCampaignModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return "CrmCampaign";
  }
}


