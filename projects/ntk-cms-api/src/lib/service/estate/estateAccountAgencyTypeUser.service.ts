
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateAccountAgencyTypeUserModel } from '../../models/entity/estate/estateAccountAgencyTypeUserModel';

@Injectable({
  providedIn: 'root',
})
export class EstateAccountAgencyTypeUserService extends ApiCmsServerBase<EstateAccountAgencyTypeUserModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstateAccountAgencyTypeUser';
  }
}
