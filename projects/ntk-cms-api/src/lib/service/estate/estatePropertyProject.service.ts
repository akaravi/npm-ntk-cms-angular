
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyProjectModel } from '../../models/entity/estate/estatePropertyProjectModel';
import { EstatePropertyProjectFilterModel } from '../../models/dto/estate/estatePropertyProjectFilterModel';

@Injectable()
export class EstatePropertyProjectService extends ApiCmsServerBase<EstatePropertyProjectModel, string, EstatePropertyProjectFilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyProject';
  }
}
