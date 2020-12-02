import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ArticleContentSimilar } from '../../models/entity/article/articleContentSimilar';

import { Injectable } from '@angular/core';


@Injectable()
export class ArticleContentSimilarService extends ApiCmsServerBase<ArticleContentSimilar, number>  {


  getModuleCotrolerUrl(): string {
    return 'ArticleContentSimilar';
  }
}
