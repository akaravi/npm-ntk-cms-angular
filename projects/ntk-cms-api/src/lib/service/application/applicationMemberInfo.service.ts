import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApplicationMemberInfoModel } from '../../models/entity/application/applicationMemberInfoModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationMemberInfoService extends ApiCmsServerBase<ApplicationMemberInfoModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'ApplicationMemberInfo';
  }
}
