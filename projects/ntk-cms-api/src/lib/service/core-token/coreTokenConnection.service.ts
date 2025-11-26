import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { CmsNotificationSendDtoModel } from '../../models/dto/core-main/cmsNotificationSendDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreTokenConnectionModel } from '../../models/entity/core-token/coreTokenConnectionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreTokenConnectionService extends ApiCmsServerBase<
  CoreTokenConnectionModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'CoreTokenConnection';
  }

  ServiceSendNotification(
    model: CmsNotificationSendDtoModel
  ): Observable<ErrorExceptionResult<CoreTokenConnectionModel>> {
    if (!model) {
      model = new CmsNotificationSendDtoModel();
    }
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
  ServiceGetAllLiveConnection(
    model: FilterModel
  ): Observable<ErrorExceptionResult<CoreTokenConnectionModel>> {
    if (!model) {
      model = new FilterModel();
    }
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetAllLiveConnection',
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
