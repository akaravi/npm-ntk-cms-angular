
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleSiteAccountingDocumentDetailTypeModel } from '../../models/entity/core-module-main/coreModuleSiteAccountingDocumentDetailTypeModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreModuleSiteAccountingDocumentDetailTypeService extends ApiCmsServerBase<CoreModuleSiteAccountingDocumentDetailTypeModel, number,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreModuleSiteAccountingDocumentDetailType';
  }
}
