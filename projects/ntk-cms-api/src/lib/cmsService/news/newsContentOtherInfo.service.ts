import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { NewsContentOtherInfoModel } from '../../cmsModels/news/newsContentOtherInfoModel';


export class NewsContentOtherInfoService extends ApiCmsServerBase<NewsContentOtherInfoModel, number>  {
  

  getModuleCotrolerUrl(): string {
    return 'NewsContentOtherInfo';
  }
}
