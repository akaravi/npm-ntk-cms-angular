
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleSiteAccountingDocumentDetailTypeModel } from '../../models/entity/core-module-main/coreModuleSiteAccountingDocumentDetailTypeModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleSiteAccountingDocumentDetailTypeService extends ApiCmsServerBase<CoreModuleSiteAccountingDocumentDetailTypeModel, number>  {  getModuleControllerUrl(): string {
    return 'CoreModuleSiteAccountingDocumentDetailType';
  }
}
