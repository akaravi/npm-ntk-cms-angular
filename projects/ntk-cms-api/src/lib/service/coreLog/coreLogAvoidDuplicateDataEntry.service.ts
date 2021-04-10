
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreLogAvoidDuplicateDataEntryModel } from '../../models/entity/coreLog/coreLogAvoidDuplicateDataEntryModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreLogAvoidDuplicateDataEntryService extends ApiCmsServerBase<CoreLogAvoidDuplicateDataEntryModel, string>  {

  getModuleCotrolerUrl(): string {
    return 'CoreLogAvoidDuplicateDataEntry';
  }
}
