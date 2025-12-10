import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { InfoEnumModel } from '../../models/entity/base/infoEnumModel';
import { ApiServerBase } from '../base/apiServerBase.service';

@Injectable()
export class CoreEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'CoreEnum';
  }

  ServiceRecordStatusEnum(
    cashApiSeconds: number = 0
  ): Observable<ErrorExceptionResult<InfoEnumModel>> {
    //! optimaze call api
    const serviceNameKay = 'ServiceRecordStatusEnum';
    return from(this.cashApiIsValid(serviceNameKay, cashApiSeconds)).pipe(
      mergeMap((isValid) => {
        if (isValid) return of(this.cachApiResult[serviceNameKay]);
        return this.http
          .get(
            this.getBaseUrl() +
              this.getModuleControllerUrl() +
              '/RecordStatusEnum',
            {
              headers: this.getHeaders(),
            }
          )
          .pipe(
            map((ret: any) => {
              //! optimaze call api
              if (cashApiSeconds > 0) {
                this.cashApiVlaueSet(serviceNameKay, ret);
              }
              //! optimaze call api
              return ret;
            })
          );
      })
    );
  }
  ServiceRecordAdminStatusEnum(
    cashApiSeconds: number = 0
  ): Observable<ErrorExceptionResult<InfoEnumModel>> {
    //! optimaze call api
    const serviceNameKay = 'ServiceRecordAdminStatusEnum';
    return from(this.cashApiIsValid(serviceNameKay, cashApiSeconds)).pipe(
      mergeMap((isValid) => {
        if (isValid) return of(this.cachApiResult[serviceNameKay]);
        return this.http
          .get(
            this.getBaseUrl() +
              this.getModuleControllerUrl() +
              '/RecordAdminStatusEnum',
            {
              headers: this.getHeaders(),
            }
          )
          .pipe(
            map((ret: any) => {
              //! optimaze call api
              if (cashApiSeconds > 0) {
                this.cashApiVlaueSet(serviceNameKay, ret);
              }
              //! optimaze call api
              return ret;
            })
          );
      })
    );
  }

  ServiceLocationTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/LocationTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceUserLanguageEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/UserLanguageEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ////
  // EnumUserLanguage
  ////
  ServiceGenderEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GenderEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceMenuPlaceTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/MenuPlaceTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceSiteStatusEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/SiteStatusEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceGenderTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GenderTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceCmsSiteMenuAreaTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/CmsSiteMenuAreaTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceLanguageEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/LanguageEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceDeviceTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/DeviceTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceOperatingSystemTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/OperatingSystemTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceManageUserAccessAreaTypesEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/ManageUserAccessAreaTypesEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceManageUserAccessUserTypesEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/ManageUserAccessUserTypesEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceSendSmsStatusTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/SendSmsStatusTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceSendEmailStatusTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/SendEmailStatusTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceSendNotificationStatusTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/SendNotificationStatusTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }

  ServiceReceiverNotificationStatusTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/ReceiverNotificationStatusTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceCmsModuleSaleItemTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/CmsModuleSaleItemTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceNotificationTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/NotificationTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceReportFileTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/ReportFileTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceUserClaimKindsEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/UserClaimKindsEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceUserClaimGroupActionTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/UserClaimGroupActionTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceInputDataTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/InputDataTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
}
