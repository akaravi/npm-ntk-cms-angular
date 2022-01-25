import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


import { Injectable } from '@angular/core';
import { UniversalMenuMenuItemProcessModel } from '../../models/entity/universal-menu/universalMenuMenuItemProcessModel';


@Injectable()
export class UniversalMenuMenuItemProcessService extends ApiCmsServerBase<UniversalMenuMenuItemProcessModel, number>  {
  getModuleControllerUrl(): string {
    return 'UniversalMenuMenuItemProcess';
  }


}
