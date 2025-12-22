import { Injectable } from "@angular/core";
import { FilterModel } from "../../models/entity/base/filterModel";
import { CrmLeadModel } from "../../models/entity/crm/crmLeadModel";
import { ApiCmsServerBase } from "../base/apiCmsServerBase.service";

@Injectable()
export class CrmLeadService extends ApiCmsServerBase<CrmLeadModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return "CrmLead";
  }
}


