import { Injectable } from '@angular/core';
import { ApiTelegramUploadedFileModel } from '../../models/entity/api-telegram/apiTelegramUploadedFileModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class ApiTelegramUploadedFileService extends ApiCmsServerBase<ApiTelegramUploadedFileModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ApiTelegramUploadedFile';
  }

}
