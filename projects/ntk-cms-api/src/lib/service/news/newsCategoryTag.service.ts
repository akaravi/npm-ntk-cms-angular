import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { NewsCategoryTagModel } from '../../models/news/newsCategoryTagModel';


export class NewsCategoryTagService extends ApiCmsServerBase<NewsCategoryTagModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'newsCategoryTag';
  }
}
