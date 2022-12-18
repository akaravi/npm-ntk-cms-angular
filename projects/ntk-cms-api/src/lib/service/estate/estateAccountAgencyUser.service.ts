
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateAccountAgencyUserModel } from '../../models/entity/estate/estateAccountAgencyUserModel';

@Injectable()
export class EstateAccountAgencyUserService extends ApiCmsServerBase<EstateAccountAgencyUserModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstateAccountAgencyUser';
  }
}
