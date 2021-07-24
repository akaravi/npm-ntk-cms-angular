
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyShareAgentModel } from '../../models/entity/estate/estatePropertyShareAgentModel';

@Injectable({
  providedIn: 'root',
})
export class EstatePropertyShareAgentService extends ApiCmsServerBase<EstatePropertyShareAgentModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstatePropertyShareAgent';
  }
}
