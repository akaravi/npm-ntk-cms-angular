import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { NewsCommentModel } from '../../cmsModels/news/newsCommentModel';


export class NewsCommentService extends ApiCmsServerBase<NewsCommentModel, number>  {
  

  getModuleCotrolerUrl(): string {
    return 'NewsComment';
  }
}
