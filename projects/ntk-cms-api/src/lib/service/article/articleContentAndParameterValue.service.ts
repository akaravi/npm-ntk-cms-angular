import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class ArticleContentAndParameterValueService extends ApiCmsServerBase<any, number>  {


  getModuleCotrolerUrl(): string {
    return 'ArticleContentAndParameterValue';
  }
}
