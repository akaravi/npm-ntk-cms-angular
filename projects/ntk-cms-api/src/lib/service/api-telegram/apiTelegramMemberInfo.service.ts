import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { ApiTelegramMemberInfoModel } from '../../models/entity/api-telegram/apiTelegramMemberInfoModel';


@Injectable()
export class ApiTelegramMemberInfoService extends ApiCmsServerBase<ApiTelegramMemberInfoModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ApiTelegramMemberInfo';
  }


}
