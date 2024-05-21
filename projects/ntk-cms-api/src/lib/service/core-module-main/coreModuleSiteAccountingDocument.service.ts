
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleSiteAccountingDocumentModel } from '../../models/entity/core-module-main/coreModuleSiteAccountingDocumentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreModuleSiteAccountingDocumentService extends ApiCmsServerBase<CoreModuleSiteAccountingDocumentModel, number, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreModuleSiteAccountingDocument';
    }
}
