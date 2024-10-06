
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateAccountExpertWorkAreaModel } from '../../models/entity/estate/estateAccountExpertWorkAreaModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstateAccountExpertWorkAreaService extends ApiCmsServerBase<EstateAccountExpertWorkAreaModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateAccountExpertWorkArea';
  }
}
