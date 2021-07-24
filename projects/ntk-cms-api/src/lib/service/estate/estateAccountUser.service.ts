
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateAccountUserModel } from '../../models/entity/estate/estateAccountUserModel';

@Injectable({
  providedIn: 'root',
})
export class EstateAccountUserService extends ApiCmsServerBase<EstateAccountUserModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstateAccountUser';
  }
}
