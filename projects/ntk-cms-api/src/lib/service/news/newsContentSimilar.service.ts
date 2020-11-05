import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { NewsContentSimilar } from '../../models/entity/news/newsContentSimilar';


export class NewsContentSimilarService extends ApiCmsServerBase<NewsContentSimilar, number>  {


  getModuleCotrolerUrl(): string {
    return 'NewsContentSimilar';
  }
}
