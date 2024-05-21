import { Injectable } from '@angular/core';
import { ApiTelegramReceivedFileModel } from '../../models/entity/api-telegram/apiTelegramReceivedFileModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class ApiTelegramReceivedFileService extends ApiCmsServerBase<ApiTelegramReceivedFileModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ApiTelegramReceivedFile';
  }


}
