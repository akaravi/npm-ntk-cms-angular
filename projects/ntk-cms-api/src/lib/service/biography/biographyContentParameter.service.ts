import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class BiographyContentParameterService extends ApiCmsServerBase<any, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'BiographyContentParameter';
  }
}
