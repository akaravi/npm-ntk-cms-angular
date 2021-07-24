
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreLogAvoidDuplicateDataEntryModel } from '../../models/entity/core-log/coreLogAvoidDuplicateDataEntryModel';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CoreLogAvoidDuplicateDataEntryService extends ApiCmsServerBase<CoreLogAvoidDuplicateDataEntryModel, string>  {
    getModuleCotrolerUrl(): string {
    return 'CoreLogAvoidDuplicateDataEntry';
  }
}
