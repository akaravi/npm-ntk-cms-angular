import { Injectable } from '@angular/core';
import { ApiTelegramMemberInfoModel } from '../../models/entity/api-telegram/apiTelegramMemberInfoModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApiTelegramMemberInfoService extends ApiCmsServerBase<ApiTelegramMemberInfoModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ApiTelegramMemberInfo';
  }


}
