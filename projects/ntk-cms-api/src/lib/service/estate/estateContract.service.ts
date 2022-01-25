
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateContractModel } from '../../models/entity/estate/estateContractModel';

@Injectable()
export class EstateContractService extends ApiCmsServerBase<EstateContractModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstateContract';
  }
}
