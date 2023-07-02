import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiTelegramLogInputModel } from '../../models/entity/api-telegram/apiTelegramLogInputModel';

@Injectable()
export class ApiTelegramLogInputService extends ApiCmsServerBase<ApiTelegramLogInputModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'ApiTelegramLogInput';
  }


}
