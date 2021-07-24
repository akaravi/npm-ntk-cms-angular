
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateContractModel } from '../../models/entity/estate/estateContractModel';

@Injectable({
  providedIn: 'root',
})
export class EstateContractService extends ApiCmsServerBase<EstateContractModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstateContract';
  }
}
