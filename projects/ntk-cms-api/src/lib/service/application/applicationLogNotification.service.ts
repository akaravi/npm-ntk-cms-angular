import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { SendNotificationModel } from '../../models/dto/application/sendNotificationModel';
import { ApplicationLogNotificationModel } from '../../models/entity/application/applicationLogNotificationModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class ApplicationLogNotificationService extends ApiCmsServerBase<
  ApplicationLogNotificationModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'ApplicationLogNotification';
  }

  ServiceSendNotification(
    model: SendNotificationModel
  ): Observable<ErrorExceptionResult<ApplicationLogNotificationModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/SendNotification',
        model,
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
