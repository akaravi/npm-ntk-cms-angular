import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { NewsCategoryTagModel } from '../../models/entity/news/newsCategoryTagModel';


export class NewsCategoryTagService extends ApiCmsServerBase<NewsCategoryTagModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'newsCategoryTag';
  }
}
