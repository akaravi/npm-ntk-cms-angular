import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiTelegramUploadedFileModel } from '../../models/entity/api-telegram/apiTelegramUploadedFileModel';

@Injectable()
export class ApiTelegramUploadedFileService extends ApiCmsServerBase<ApiTelegramUploadedFileModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'ApiTelegramUploadedFile';
  }

}
