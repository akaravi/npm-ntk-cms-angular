
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertyAccountTypeUserModel } from '../../models/entity/estate/estatePropertyAccountTypeUserModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstatePropertyAccountTypeUserService extends ApiCmsServerBase<EstatePropertyAccountTypeUserModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstatePropertyAccountTypeUser';
  }
}
