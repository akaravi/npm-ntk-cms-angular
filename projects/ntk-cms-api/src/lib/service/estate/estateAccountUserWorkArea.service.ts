
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateAccountUserWorkAreaModel } from '../../models/entity/estate/estateAccountUserWorkAreaModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstateAccountUserWorkAreaService extends ApiCmsServerBase<EstateAccountUserWorkAreaModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateAccountUserWorkArea';
  }
}
