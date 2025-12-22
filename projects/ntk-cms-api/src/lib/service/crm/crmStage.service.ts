import { Injectable } from "@angular/core";
import { FilterModel } from "../../models/entity/base/filterModel";
import { CrmStageModel } from "../../models/entity/crm/crmStageModel";
import { ApiCmsServerBase } from "../base/apiCmsServerBase.service";

@Injectable()
export class CrmStageService extends ApiCmsServerBase<CrmStageModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return "CrmStage";
  }
}


