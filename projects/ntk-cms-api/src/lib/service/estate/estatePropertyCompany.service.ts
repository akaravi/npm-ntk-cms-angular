
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyCompanyModel } from '../../models/entity/estate/estatePropertyCompanyModel';
import { EstatePropertyCompanyFilterModel } from '../../models/dto/estate/estatePropertyCompanyFilterModel';

@Injectable()
export class EstatePropertyCompanyService extends ApiCmsServerBase<EstatePropertyCompanyModel, string, EstatePropertyCompanyFilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyCompany';
  }
}
