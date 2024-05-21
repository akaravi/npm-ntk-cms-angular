
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreLogAvoidDuplicateDataEntryModel } from '../../models/entity/core-log/coreLogAvoidDuplicateDataEntryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreLogAvoidDuplicateDataEntryService extends ApiCmsServerBase<CoreLogAvoidDuplicateDataEntryModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreLogAvoidDuplicateDataEntry';
  }
}
