
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleSiteAccountingDocumentModel } from '../../models/entity/core-module-main/coreModuleSiteAccountingDocumentModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleSiteAccountingDocumentService extends ApiCmsServerBase<CoreModuleSiteAccountingDocumentModel, number>  {  getModuleControllerUrl(): string {
    return 'CoreModuleSiteAccountingDocument';
  }
}
