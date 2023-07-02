
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreLogAvoidDuplicateDataEntryModel } from '../../models/entity/core-log/coreLogAvoidDuplicateDataEntryModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreLogAvoidDuplicateDataEntryService extends ApiCmsServerBase<CoreLogAvoidDuplicateDataEntryModel, string,FilterModel>  {
    getModuleControllerUrl(): string {
    return 'CoreLogAvoidDuplicateDataEntry';
  }
}
