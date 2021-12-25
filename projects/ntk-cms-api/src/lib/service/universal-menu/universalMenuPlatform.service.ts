import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


import { Injectable } from '@angular/core';
import { UniversalMenuPlatformModel } from '../../models/entity/universal-menu/universalMenuPlatformModel';


@Injectable()
export class UniversalMenuPlatformService extends ApiCmsServerBase<UniversalMenuPlatformModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'UniversalMenuPlatform';
  }


}
