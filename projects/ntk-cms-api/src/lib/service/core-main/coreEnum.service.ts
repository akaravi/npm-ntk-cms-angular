import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { InfoModelEnum } from '../../models/entity/base/infoModelEnum';
import { ApiServerBase } from '../base/apiServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'CoreEnum';
  }

  ServiceEnumRecordStatus(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/enumRecordStatus', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceEnumLocationType(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/enumLocationType', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEnumUserLanguage(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/enumUserLanguage', {
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
  ServiceEnumGender(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/enumGender', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEnumMenuPlaceType(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/enumMenuPlaceType', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEnumSiteStatus(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
  ServiceEnumGenderType(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
  ServiceEnumCmsSiteMenuAreaType(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
  ServiceEnumLanguage(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
  ServiceEnumDeviceType(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
  ServiceEnumOperatingSystemType(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
  ServiceEnumManageUserAccessAreaTypes(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
  ServiceEnumManageUserAccessUserTypes(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
  ServiceEnumSendSmsStatusType(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
  ServiceEnumCmsModuleSaleItemType(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
  ServiceReportFileTypeEnum(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
  ServiceEnumUserClaimKinds(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
  ServiceEnumUserClaimGroupActionType(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
  ServiceInputDataTypeEnum(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
