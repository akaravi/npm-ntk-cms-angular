
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreLogAvoidDuplicateDataEntryModel } from '../../models/entity/coreLog/coreLogAvoidDuplicateDataEntryModel';

export class CoreLogAvoidDuplicateDataEntryService extends ApiCmsServerBase<CoreLogAvoidDuplicateDataEntryModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreLogAvoidDuplicateDataEntry';
  }
}
