import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { UniversalMenuProcessModel } from '../../models/entity/universal-menu/universalMenuProcessModel';


@Injectable()
export class UniversalMenuProcessService extends ApiCmsServerBase<UniversalMenuProcessModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'UniversalMenuProcess';
  }


}
