
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleSiteAccountingDocumentDetailTypeModel } from '../../models/entity/core-module-main/coreModuleSiteAccountingDocumentDetailTypeModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreModuleSiteAccountingDocumentDetailTypeService extends ApiCmsServerBase<CoreModuleSiteAccountingDocumentDetailTypeModel, number, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreModuleSiteAccountingDocumentDetailType';
    }
}
