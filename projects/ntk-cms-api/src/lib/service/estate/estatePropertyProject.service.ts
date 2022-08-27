
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyProjectModel } from '../../models/entity/estate/estatePropertyProjectModel';

@Injectable()
export class EstatePropertyProjectService extends ApiCmsServerBase<EstatePropertyProjectModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyProject';
  }
}
