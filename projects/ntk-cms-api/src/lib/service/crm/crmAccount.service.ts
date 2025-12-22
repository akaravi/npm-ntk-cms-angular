import { Injectable } from "@angular/core";
import { FilterModel } from "../../models/entity/base/filterModel";
import { CrmAccountModel } from "../../models/entity/crm/crmAccountModel";
import { ApiCmsServerBase } from "../base/apiCmsServerBase.service";

@Injectable()
export class CrmAccountService extends ApiCmsServerBase<
  CrmAccountModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return "CrmAccount";
  }
}


