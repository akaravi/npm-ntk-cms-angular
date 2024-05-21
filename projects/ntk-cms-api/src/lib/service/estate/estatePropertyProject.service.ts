
import { Injectable } from '@angular/core';
import { EstatePropertyProjectModel } from '../../models/entity/estate/estatePropertyProjectModel';
import { EstatePropertyProjectFilterModel } from '../../models/filters/estate/estatePropertyProjectFilterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class EstatePropertyProjectService extends ApiCmsServerBase<EstatePropertyProjectModel, string, EstatePropertyProjectFilterModel> {
  getModuleControllerUrl(): string {
    return 'EstatePropertyProject';
  }
}
