
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyTypeLanduseModel } from '../../models/entity/estate/estatePropertyTypeLanduseModel';

@Injectable()
export class EstatePropertyTypeLanduseService extends ApiCmsServerBase<EstatePropertyTypeLanduseModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyTypeLanduse';
  }
}
