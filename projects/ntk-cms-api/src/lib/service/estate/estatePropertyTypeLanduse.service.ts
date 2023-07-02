
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertyTypeLanduseModel } from '../../models/entity/estate/estatePropertyTypeLanduseModel';

@Injectable()
export class EstatePropertyTypeLanduseService extends ApiCmsServerBase<EstatePropertyTypeLanduseModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyTypeLanduse';
  }
}
