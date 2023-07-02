import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiTelegramReceivedFileModel } from '../../models/entity/api-telegram/apiTelegramReceivedFileModel';

@Injectable()
export class ApiTelegramReceivedFileService extends ApiCmsServerBase<ApiTelegramReceivedFileModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'ApiTelegramReceivedFile';
  }


}
