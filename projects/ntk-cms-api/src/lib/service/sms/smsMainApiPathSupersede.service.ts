import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { map, retry } from 'rxjs/operators';
import { EditStepDtoModel } from '../../models/dto/core-main/editStepDtoModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { SmsMainApiPathSupersedeModel } from '../../models/entity/sms/smsMainApiPathSupersedeModel';

@Injectable()
export class SmsMainApiPathSupersedeService extends ApiCmsServerBase<
  SmsMainApiPathSupersedeModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathSupersede';
  }
  ServiceEditStep(
    model: EditStepDtoModel<string>
  ): Observable<ErrorExceptionResultBase> {
    if (!model) {
      model = new EditStepDtoModel<string>();
    }
    return this.http
      .put(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/EditStep',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        })
      );
  }
}
