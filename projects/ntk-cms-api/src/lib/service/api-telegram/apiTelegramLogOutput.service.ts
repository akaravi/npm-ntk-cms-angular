import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { ApiTelegramLogOutputModel } from '../../models/entity/api-telegram/apiTelegramLogOutputModel';

@Injectable()
export class ApiTelegramLogOutputService extends ApiCmsServerBase<ApiTelegramLogOutputModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'ApiTelegramLogOutput';
  }

}
