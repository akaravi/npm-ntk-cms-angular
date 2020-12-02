import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ArticleContentOtherInfoModel } from '../../models/entity/article/articleContentOtherInfoModel';

import { Injectable } from '@angular/core';


@Injectable()
export class ArticleContentOtherInfoService extends ApiCmsServerBase<ArticleContentOtherInfoModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ArticleContentOtherInfo';
  }
}
