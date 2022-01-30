
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleSiteAccountingDocumentDetailModel } from '../../models/entity/core-module-main/coreModuleSiteAccountingDocumentDetailModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleSiteAccountingDocumentDetailService extends ApiCmsServerBase<CoreModuleSiteAccountingDocumentDetailModel, number>  {  getModuleControllerUrl(): string {
    return 'CoreModuleSiteAccountingDocumentDetail';
  }
}
