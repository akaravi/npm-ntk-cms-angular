
import { Injectable } from '@angular/core';
import { EstateAccountExpertModel } from '../../models/entity/estate/estateAccountExpertModel';
import { EstateAccountExpertFilterModel } from '../../models/filters/estate/estateAccountExpertFilterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstateAccountExpertService extends ApiCmsServerBase<EstateAccountExpertModel, string, EstateAccountExpertFilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateAccountExpert';
  }
}
