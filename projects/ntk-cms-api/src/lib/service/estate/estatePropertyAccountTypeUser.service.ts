
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyAccountTypeUserModel } from '../../models/entity/estate/estatePropertyAccountTypeUserModel';

@Injectable()
export class EstatePropertyAccountTypeUserService extends ApiCmsServerBase<EstatePropertyAccountTypeUserModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstatePropertyAccountTypeUser';
  }
}
