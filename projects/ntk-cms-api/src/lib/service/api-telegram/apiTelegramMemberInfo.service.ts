import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


import { Injectable } from '@angular/core';
import { ApiTelegramMemberInfoModel } from '../../models/entity/api-telegram/apiTelegramMemberInfoModel';


@Injectable()
export class ApiTelegramMemberInfoService extends ApiCmsServerBase<ApiTelegramMemberInfoModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ApiTelegramMemberInfo';
  }


}
