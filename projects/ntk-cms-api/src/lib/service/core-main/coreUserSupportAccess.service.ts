import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreUserSupportAccessModel } from '../../models/entity/core-main/coreUserSupportAccessModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreUserSupportAccessService extends ApiCmsServerBase<CoreUserSupportAccessModel, number>  {
  getModuleControllerUrl(): string {
    return 'CoreUserSupportAccess';
  }
 
}
