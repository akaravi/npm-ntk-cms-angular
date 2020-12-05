import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { SendNotificationModel } from '../../models/dto/application/sendNotificationModel';
import { ApplicationLogNotificationModel } from '../../models/entity/application/applicationLogNotificationModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationLogNotificationService extends ApiCmsServerBase<ApplicationLogNotificationModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ApplicationLogNotification';
  }

  ServiceSendNotification(model: SendNotificationModel): Observable<ErrorExceptionResult<ApplicationLogNotificationModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SendNotification',
        model,
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<ApplicationLogNotificationModel>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

}
