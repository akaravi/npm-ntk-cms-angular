import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { BlogContentSimilar } from '../../models/entity/blog/blogContentSimilar';

import { Injectable } from '@angular/core';


@Injectable()
export class BlogContentSimilarService extends ApiCmsServerBase<BlogContentSimilar, number>  {


  getModuleCotrolerUrl(): string {
    return 'BlogContentSimilar';
  }
}
