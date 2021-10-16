import { Injectable } from '@angular/core';
import { ApplicationMemberInfoModel } from '../../models/entity/application/applicationMemberInfoModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationMemberInfoService extends ApiCmsServerBase<ApplicationMemberInfoModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'ApplicationMemberInfo';
  }
}
