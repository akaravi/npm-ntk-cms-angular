
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateContractModel } from '../../models/entity/estate/estateContractModel';

@Injectable()
export class EstateContractService extends ApiCmsServerBase<EstateContractModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstateContract';
  }
}
