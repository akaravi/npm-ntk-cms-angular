
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyDetailGroupModel } from '../../models/entity/estate/estatePropertyDetailGroupModel';

@Injectable()
export class EstatePropertyDetailGroupService extends ApiCmsServerBase<EstatePropertyDetailGroupModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstatePropertyDetailGroup';
  }
}
