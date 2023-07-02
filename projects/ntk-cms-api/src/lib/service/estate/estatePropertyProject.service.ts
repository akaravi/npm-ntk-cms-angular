
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertyProjectModel } from '../../models/entity/estate/estatePropertyProjectModel';

@Injectable()
export class EstatePropertyProjectService extends ApiCmsServerBase<EstatePropertyProjectModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyProject';
  }
}
