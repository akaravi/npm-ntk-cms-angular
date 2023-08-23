import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { InfoEnumModel } from '../../models/entity/base/infoEnumModel';
import { ApiServerBase } from '../base/apiServerBase.service';
import { Injectable } from '@angular/core';
import { I } from '@angular/cdk/keycodes';

@Injectable()
export class CoreEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'CoreEnum';
  }

  ServiceRecordStatusEnum(cashApiSeconds?: number): Observable<ErrorExceptionResult<InfoEnumModel>> {
    //! optimaze call api
    const serviceNameKay = 'ServiceRecordStatusEnum';
    if (this.cashApiIsValid(serviceNameKay, cashApiSeconds))
      return of(this.cachApiResult[serviceNameKay]);
    //! optimaze call api
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/RecordStatusEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          //! optimaze call api
          if (cashApiSeconds > 0) {
            this.cachApiResult[serviceNameKay] = ret;
            this.cachApiResult[serviceNameKay].dateResult = new Date();
          }
          //! optimaze call api
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceLocationTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/LocationTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceUserLanguageEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/UserLanguageEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
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
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceMenuPlaceTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/MenuPlaceTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceSiteStatusEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/SiteStatusEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGenderTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GenderTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceCmsSiteMenuAreaTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CmsSiteMenuAreaTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceLanguageEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/LanguageEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceDeviceTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/DeviceTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceOperatingSystemTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/OperatingSystemTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceManageUserAccessAreaTypesEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ManageUserAccessAreaTypesEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceManageUserAccessUserTypesEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ManageUserAccessUserTypesEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceSendSmsStatusTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/SendSmsStatusTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceSendNotificationStatusTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/SendNotificationStatusTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceReceiverNotificationStatusTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ReceiverNotificationStatusTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceCmsModuleSaleItemTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CmsModuleSaleItemTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceReportFileTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ReportFileTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceUserClaimKindsEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/UserClaimKindsEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceUserClaimGroupActionTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/UserClaimGroupActionTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceInputDataTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/InputDataTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

}
