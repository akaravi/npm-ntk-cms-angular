
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyShareAgencyModel } from '../../models/entity/estate/estatePropertyShareAgencyModel';

@Injectable()
export class EstatePropertyShareAgencyService extends ApiCmsServerBase<EstatePropertyShareAgencyModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyShareAgency';
  }
}
