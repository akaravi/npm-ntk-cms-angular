import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { SendNotificationModel } from '../../models/dto/application/sendNotificationModel';
import { ApplicationLogNotificationModel } from '../../models/entity/application/applicationLogNotificationModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationLogNotificationService extends ApiCmsServerBase<ApplicationLogNotificationModel, string>  {
  getModuleControllerUrl(): string {
    return 'ApplicationLogNotification';
  }

  ServiceSendNotification(model: SendNotificationModel): Observable<ErrorExceptionResult<ApplicationLogNotificationModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/SendNotification',
        model,
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

}
