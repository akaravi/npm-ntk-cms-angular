
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertyCompanyModel } from '../../models/entity/estate/estatePropertyCompanyModel';

@Injectable()
export class EstatePropertyCompanyService extends ApiCmsServerBase<EstatePropertyCompanyModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyCompany';
  }
}
