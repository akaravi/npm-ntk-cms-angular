
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateAccountAgencyUserModel } from '../../models/entity/estate/estateAccountAgencyUserModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstateAccountAgencyUserService extends ApiCmsServerBase<EstateAccountAgencyUserModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateAccountAgencyUser';
  }
}
