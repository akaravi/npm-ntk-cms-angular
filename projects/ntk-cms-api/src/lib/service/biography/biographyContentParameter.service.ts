import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class BiographyContentParameterService extends ApiCmsServerBase<any, number, FilterModel>  {
  getModuleControllerUrl(): string {
    return 'BiographyContentParameter';
  }
}
