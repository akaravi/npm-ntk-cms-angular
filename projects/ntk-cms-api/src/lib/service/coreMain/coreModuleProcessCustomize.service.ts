import { CoreModuleProcessCustomizeModel } from '../../models/entity/coreMain/_export';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class CoreModuleProcessCustomizeService extends ApiCmsServerBase<CoreModuleProcessCustomizeModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreModuleProcessCustomize';
  }
}
