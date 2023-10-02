
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';

import { EstateAccountUserModel } from '../../models/entity/estate/estateAccountUserModel';
import { EstateAccountUserFilterModel } from '../../models/filters/estate/estateAccountUserFilterModel';



@Injectable()
export class EstateAccountUserService extends ApiCmsServerBase<EstateAccountUserModel, string, EstateAccountUserFilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstateAccountUser';
  }
}
