
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleSiteAccountingDocumentModel } from '../../models/entity/core-module-main/coreModuleSiteAccountingDocumentModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreModuleSiteAccountingDocumentService extends ApiCmsServerBase<CoreModuleSiteAccountingDocumentModel, number,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreModuleSiteAccountingDocument';
  }
}
