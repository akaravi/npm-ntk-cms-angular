import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { NewsContentOtherInfoModel } from '../../models/entity/news/newsContentOtherInfoModel';


export class NewsContentOtherInfoService extends ApiCmsServerBase<NewsContentOtherInfoModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'NewsContentOtherInfo';
  }
}
