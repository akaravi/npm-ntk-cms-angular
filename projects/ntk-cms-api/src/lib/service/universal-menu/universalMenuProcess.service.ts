import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { UniversalMenuProcessModel } from '../../models/entity/universal-menu/universalMenuProcessModel';


@Injectable()
export class UniversalMenuProcessService extends ApiCmsServerBase<UniversalMenuProcessModel, number>  {
  getModuleControllerUrl(): string {
    return 'UniversalMenuProcess';
  }


}
