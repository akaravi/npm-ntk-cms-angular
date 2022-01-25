
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateContractTypeModel } from '../../models/entity/estate/estateContractTypeModel';

@Injectable()
export class EstateContractTypeService extends ApiCmsServerBase<EstateContractTypeModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstateContractType';
  }
}
