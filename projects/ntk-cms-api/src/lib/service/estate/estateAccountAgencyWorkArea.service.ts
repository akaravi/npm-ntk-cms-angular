
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateAccountAgencyWorkAreaModel } from '../../models/entity/estate/estateAccountAgencyWorkAreaModel';

@Injectable()
export class EstateAccountAgencyWorkAreaService extends ApiCmsServerBase<EstateAccountAgencyWorkAreaModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstateAccountAgencyWorkArea';
  }
}
