
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateContractTypeModel } from '../../models/entity/estate/estateContractTypeModel';

@Injectable({
  providedIn: 'root',
})
export class EstateContractTypeService extends ApiCmsServerBase<EstateContractTypeModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstateContractType';
  }
}
