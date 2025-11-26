import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainMessageCategoryModel } from '../../models/entity/sms/smsMainMessageCategoryModel';

@Injectable()
export class SmsMainMessageCategoryService extends ApiCmsServerBase<
  SmsMainMessageCategoryModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'SmsMainMessageCategory';
  }

  ServiceMove(
    OldId: string,
    NewId: string
  ): Observable<ErrorExceptionResult<SmsMainMessageCategoryModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/Move',
        { Old: OldId, New: NewId },
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
}
