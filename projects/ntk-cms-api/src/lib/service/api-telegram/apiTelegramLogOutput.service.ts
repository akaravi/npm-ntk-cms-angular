import { Injectable } from '@angular/core';
import { ApiTelegramLogOutputModel } from '../../models/entity/api-telegram/apiTelegramLogOutputModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class ApiTelegramLogOutputService extends ApiCmsServerBase<ApiTelegramLogOutputModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ApiTelegramLogOutput';
  }

}
