
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleSiteUserCreditModel } from '../../models/entity/core-module-main/coreModuleSiteUserCreditModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleSiteUserCreditService extends ApiCmsServerBase<CoreModuleSiteUserCreditModel, number>  {  getModuleControllerUrl(): string {
    return 'CoreModuleSiteUserCredit';
  }
}
