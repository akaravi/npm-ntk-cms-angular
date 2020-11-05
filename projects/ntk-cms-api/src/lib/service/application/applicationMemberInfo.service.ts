import { ApplicationMemberInfoModel } from '../../models/entity/application/ApplicationMemberInfoModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';



export class ApplicationMemberInfoService extends ApiCmsServerBase<ApplicationMemberInfoModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ApplicationMemberInfo';
  }
}
