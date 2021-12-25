import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { ApiTelegramLogInputModel } from '../../models/entity/api-telegram/apiTelegramLogInputModel';


@Injectable()
export class ApiTelegramLogInputService extends ApiCmsServerBase<ApiTelegramLogInputModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'ApiTelegramLogInput';
  }


}
