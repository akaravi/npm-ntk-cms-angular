import { Injectable } from '@angular/core';
import { ApiTelegramLogInputModel } from '../../models/entity/api-telegram/apiTelegramLogInputModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class ApiTelegramLogInputService extends ApiCmsServerBase<ApiTelegramLogInputModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ApiTelegramLogInput';
  }


}
