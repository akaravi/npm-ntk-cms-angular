
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyCompanyModel } from '../../models/entity/estate/estatePropertyCompanyModel';

@Injectable()
export class EstatePropertyCompanyService extends ApiCmsServerBase<EstatePropertyCompanyModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyCompany';
  }
}
