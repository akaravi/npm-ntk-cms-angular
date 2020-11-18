import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { NewsContentSimilar } from '../../models/entity/news/newsContentSimilar';

import { Injectable } from '@angular/core';


@Injectable()
export class NewsContentSimilarService extends ApiCmsServerBase<NewsContentSimilar, number>  {


  getModuleCotrolerUrl(): string {
    return 'NewsContentSimilar';
  }
}
