
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateAccountAgencyExpertModel } from '../../models/entity/estate/estateAccountAgencyExpertModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstateAccountAgencyExpertService extends ApiCmsServerBase<EstateAccountAgencyExpertModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateAccountAgencyExpert';
  }
}
