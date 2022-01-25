import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { ApiTelegramUploadedFileModel } from '../../models/entity/api-telegram/apiTelegramUploadedFileModel';

@Injectable()
export class ApiTelegramUploadedFileService extends ApiCmsServerBase<ApiTelegramUploadedFileModel, number>  {
  getModuleControllerUrl(): string {
    return 'ApiTelegramUploadedFile';
  }

}
