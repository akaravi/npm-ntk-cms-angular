import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class BlogContentParameterTypeService extends ApiCmsServerBase<any, number>  {
  getModuleControllerUrl(): string {
    return 'BlogContentParameterType';
  }
}
