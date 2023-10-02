
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateAccountAgencyModel } from '../../models/entity/estate/estateAccountAgencyModel';
import { EstateAccountAgencyFilterModel } from '../../models/filters/estate/estateAccountAgencyFilterModel';


@Injectable()
export class EstateAccountAgencyService extends ApiCmsServerBase<EstateAccountAgencyModel, string, EstateAccountAgencyFilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstateAccountAgency';
  }

}
