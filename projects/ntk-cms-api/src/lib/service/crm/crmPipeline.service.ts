import { Injectable } from "@angular/core";
import { FilterModel } from "../../models/entity/base/filterModel";
import { CrmPipelineModel } from "../../models/entity/crm/crmPipelineModel";
import { ApiCmsServerBase } from "../base/apiCmsServerBase.service";

@Injectable()
export class CrmPipelineService extends ApiCmsServerBase<
  CrmPipelineModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return "CrmPipeline";
  }
}


