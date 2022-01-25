
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyShareAgentModel } from '../../models/entity/estate/estatePropertyShareAgentModel';

@Injectable()
export class EstatePropertyShareAgentService extends ApiCmsServerBase<EstatePropertyShareAgentModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyShareAgent';
  }
}
