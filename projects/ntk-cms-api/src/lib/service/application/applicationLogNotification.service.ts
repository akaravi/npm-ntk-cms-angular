import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { SendNotificationModel } from '../../models/dto/application/sendNotificationModel';
import { ApplicationLogNotificationModel } from '../../models/entity/application/applicationLogNotificationModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationLogNotificationService extends ApiCmsServerBase<ApplicationLogNotificationModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ApplicationLogNotification';
  }

  ServiceSendNotification(model: SendNotificationModel): Observable<ErrorExcptionResult<ApplicationLogNotificationModel>> {
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
        map((ret: ErrorExcptionResult<ApplicationLogNotificationModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

}
