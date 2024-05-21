import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreUserClaimTypeModel } from '../../models/entity/core-main/coreUserClaimTypeModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreUserClaimTypeService extends ApiCmsServerBase<CoreUserClaimTypeModel, number, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreUserClaimType';
    }
}
