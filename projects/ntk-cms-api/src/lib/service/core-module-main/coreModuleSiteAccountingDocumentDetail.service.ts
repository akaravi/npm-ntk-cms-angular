
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleSiteAccountingDocumentDetailModel } from '../../models/entity/core-module-main/coreModuleSiteAccountingDocumentDetailModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreModuleSiteAccountingDocumentDetailService extends ApiCmsServerBase<CoreModuleSiteAccountingDocumentDetailModel, number, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreModuleSiteAccountingDocumentDetail';
    }
}
