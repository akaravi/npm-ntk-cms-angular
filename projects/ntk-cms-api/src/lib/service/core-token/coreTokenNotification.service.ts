
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { CmsNotificationSendDtoModel } from '../../models/dto/core-main/cmsNotificationSendDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreTokenNotificationModel } from '../../models/entity/core-token/coreTokenNotificationModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreTokenNotificationService extends ApiCmsServerBase<CoreTokenNotificationModel, string, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreTokenNotification';
    }

  ServiceSendNotification(model: CmsNotificationSendDtoModel):
    Observable<ErrorExceptionResult<CoreTokenNotificationModel>> {
    if (!model) {
      model = new CmsNotificationSendDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/SendNotification', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
