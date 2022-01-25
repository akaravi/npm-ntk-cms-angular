import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { ApiTelegramReceivedFileModel } from '../../models/entity/api-telegram/apiTelegramReceivedFileModel';

@Injectable()
export class ApiTelegramReceivedFileService extends ApiCmsServerBase<ApiTelegramReceivedFileModel, number>  {
  getModuleControllerUrl(): string {
    return 'ApiTelegramReceivedFile';
  }


}
