import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


import { Injectable } from '@angular/core';
import { ApiTelegramLogOutputModel } from '../../models/entity/api-telegram/apiTelegramLogOutputModel';


@Injectable()
export class ApiTelegramLogOutputService extends ApiCmsServerBase<ApiTelegramLogOutputModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'ApiTelegramLogOutput';
  }

}
