import { Injectable } from "@angular/core";
import { FilterModel } from "../../models/entity/base/filterModel";
import { CrmOpportunityModel } from "../../models/entity/crm/crmOpportunityModel";
import { ApiCmsServerBase } from "../base/apiCmsServerBase.service";

@Injectable()
export class CrmOpportunityService extends ApiCmsServerBase<
  CrmOpportunityModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return "CrmOpportunity";
  }
}


