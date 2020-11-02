import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { NewsCategoryTagModel } from '../../cmsModels/news/newsCategoryTagModel';


export class NewsCategoryTagService extends ApiCmsServerBase<NewsCategoryTagModel, number>  {
  

  getModuleCotrolerUrl(): string {
    return 'newsCategoryTag';
  }
}
