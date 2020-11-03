import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { NewsCommentModel } from '../../models/news/newsCommentModel';


export class NewsCommentService extends ApiCmsServerBase<NewsCommentModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'NewsComment';
  }
}
