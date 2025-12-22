import { Injectable } from "@angular/core";
import { FilterModel } from "../../models/entity/base/filterModel";
import { CrmDealModel } from "../../models/entity/crm/crmDealModel";
import { ApiCmsServerBase } from "../base/apiCmsServerBase.service";

@Injectable()
export class CrmDealService extends ApiCmsServerBase<CrmDealModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return "CrmDeal";
  }
}


