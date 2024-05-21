import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class NewsContentParameterService extends ApiCmsServerBase<any, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'NewsContentParameter';
  }
}
