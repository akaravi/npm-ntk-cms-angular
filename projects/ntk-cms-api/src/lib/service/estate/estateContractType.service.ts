import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateContractTypeModel } from '../../models/entity/estate/estateContractTypeModel';

@Injectable()
export class EstateContractTypeService extends ApiCmsServerBase<EstateContractTypeModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstateContractType';
  }
}
