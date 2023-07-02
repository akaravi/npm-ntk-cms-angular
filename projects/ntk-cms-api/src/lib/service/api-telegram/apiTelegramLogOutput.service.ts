import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiTelegramLogOutputModel } from '../../models/entity/api-telegram/apiTelegramLogOutputModel';

@Injectable()
export class ApiTelegramLogOutputService extends ApiCmsServerBase<ApiTelegramLogOutputModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'ApiTelegramLogOutput';
  }

}
