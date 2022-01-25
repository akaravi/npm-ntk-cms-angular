
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateAccountUserModel } from '../../models/entity/estate/estateAccountUserModel';

@Injectable()
export class EstateAccountUserService extends ApiCmsServerBase<EstateAccountUserModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstateAccountUser';
  }
}
