import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Injectable } from '@angular/core';
import { ApiTelegramReceivedFileModel } from '../../models/entity/api-telegram/apiTelegramReceivedFileModel';


@Injectable()
export class ApiTelegramReceivedFileService extends ApiCmsServerBase<ApiTelegramReceivedFileModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ApiTelegramReceivedFile';
  }


}
