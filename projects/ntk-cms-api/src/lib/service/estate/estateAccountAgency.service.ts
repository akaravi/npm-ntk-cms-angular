
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateAccountAgencyModel } from '../../models/entity/estate/estateAccountAgencyModel';

@Injectable()
export class EstateAccountAgencyService extends ApiCmsServerBase<EstateAccountAgencyModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstateAccountAgency';
  }
}
