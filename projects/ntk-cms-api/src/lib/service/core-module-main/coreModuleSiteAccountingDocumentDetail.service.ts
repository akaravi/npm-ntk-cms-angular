
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleSiteAccountingDocumentDetailModel } from '../../models/entity/core-module-main/coreModuleSiteAccountingDocumentDetailModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreModuleSiteAccountingDocumentDetailService extends ApiCmsServerBase<CoreModuleSiteAccountingDocumentDetailModel, number,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreModuleSiteAccountingDocumentDetail';
  }
}
