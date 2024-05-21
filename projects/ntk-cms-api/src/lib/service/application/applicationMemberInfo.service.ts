import { Injectable } from '@angular/core';
import { ApplicationMemberInfoModel } from '../../models/entity/application/applicationMemberInfoModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationMemberInfoService extends ApiCmsServerBase<ApplicationMemberInfoModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ApplicationMemberInfo';
  }
}
