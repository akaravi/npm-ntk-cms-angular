
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleSiteCreditModel } from '../../models/entity/core-module-main/coreModuleSiteCreditModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleSiteCreditService extends ApiCmsServerBase<CoreModuleSiteCreditModel, number>  {  getModuleControllerUrl(): string {
    return 'CoreModuleSiteCredit';
  }
}
