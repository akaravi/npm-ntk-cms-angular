import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { NewsTagModel } from '../../models/news/newsTagModel';


export class NewsTagService extends ApiCmsServerBase<NewsTagModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'NewsTag';
  }
}
