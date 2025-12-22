import { Injectable } from "@angular/core";
import { FilterModel } from "../../models/entity/base/filterModel";
import { CrmContactModel } from "../../models/entity/crm/crmContactModel";
import { ApiCmsServerBase } from "../base/apiCmsServerBase.service";

@Injectable()
export class CrmContactService extends ApiCmsServerBase<
  CrmContactModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return "CrmContact";
  }
}


