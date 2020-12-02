import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { BiographyContentSimilar } from '../../models/entity/biography/biographyContentSimilar';

import { Injectable } from '@angular/core';


@Injectable()
export class BiographyContentSimilarService extends ApiCmsServerBase<BiographyContentSimilar, number>  {


  getModuleCotrolerUrl(): string {
    return 'BiographyContentSimilar';
  }
}
