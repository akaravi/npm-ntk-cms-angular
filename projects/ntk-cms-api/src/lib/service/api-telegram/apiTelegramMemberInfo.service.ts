import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiTelegramMemberInfoModel } from '../../models/entity/api-telegram/apiTelegramMemberInfoModel';


@Injectable()
export class ApiTelegramMemberInfoService extends ApiCmsServerBase<ApiTelegramMemberInfoModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'ApiTelegramMemberInfo';
  }


}
