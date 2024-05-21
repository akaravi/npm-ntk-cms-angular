
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateAccountAgencyWorkAreaModel } from '../../models/entity/estate/estateAccountAgencyWorkAreaModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstateAccountAgencyWorkAreaService extends ApiCmsServerBase<EstateAccountAgencyWorkAreaModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateAccountAgencyWorkArea';
  }
}
