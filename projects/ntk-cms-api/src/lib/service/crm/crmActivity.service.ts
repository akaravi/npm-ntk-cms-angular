import { Injectable } from "@angular/core";
import { FilterModel } from "../../models/entity/base/filterModel";
import { CrmActivityModel } from "../../models/entity/crm/crmActivityModel";
import { ApiCmsServerBase } from "../base/apiCmsServerBase.service";

@Injectable()
export class CrmActivityService extends ApiCmsServerBase<
  CrmActivityModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return "CrmActivity";
  }
}


