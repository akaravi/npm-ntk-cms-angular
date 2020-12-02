import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class ArticleShareMainAdminSettingService extends ApiCmsServerBase<any, number>  {


  getModuleCotrolerUrl(): string {
    return 'ArticleShareMainAdminSetting';
  }
}
