import { CoreModuleProcessCustomizeModel } from '../../models/entity/coreMain/_export';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleProcessCustomizeService extends ApiCmsServerBase<CoreModuleProcessCustomizeModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreModuleProcessCustomize';
  }
}
