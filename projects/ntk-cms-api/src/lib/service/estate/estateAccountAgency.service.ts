
import { Injectable } from '@angular/core';
import { EstateAccountAgencyModel } from '../../models/entity/estate/estateAccountAgencyModel';
import { EstateAccountAgencyFilterModel } from '../../models/filters/estate/estateAccountAgencyFilterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class EstateAccountAgencyService extends ApiCmsServerBase<EstateAccountAgencyModel, string, EstateAccountAgencyFilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateAccountAgency';
  }

}
