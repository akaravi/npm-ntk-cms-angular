import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


import { Injectable } from '@angular/core';
import { ApiTelegramUploadedFileModel } from '../../models/entity/api-telegram/apiTelegramUploadedFileModel';


@Injectable()
export class ApiTelegramUploadedFileService extends ApiCmsServerBase<ApiTelegramUploadedFileModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ApiTelegramUploadedFile';
  }

}
