import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ErrorExceptionResult } from "../../models/entity/base/errorExceptionResult";
import { InfoEnumModel } from "../../models/entity/base/infoEnumModel";
import { ApiServerBase } from "../base/apiServerBase.service";

/**
 * سرویس Enum برای ماژول CRM.
 * این سرویس متدهای دریافت اطلاعات enumهای CRM را فراهم می‌کند.
 */
@Injectable()
export class CrmEnumService extends ApiServerBase {
  /**
   * دریافت URL کنترلر ماژول
   * @returns نام کنترلر Enum برای CRM
   */
  getModuleControllerUrl(): string {
    return "CrmEnum";
  }

  /**
   * دریافت اطلاعات CrmActivityTypeEnum
   * @returns Observable حاوی لیست مقادیر enum نوع Activity
   */
  ServiceCrmActivityTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CrmActivityTypeEnum",
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        map((ret: any) => {
          return ret;
        }),
      );
  }

  /**
   * دریافت اطلاعات CrmActivityStatusEnum
   * @returns Observable حاوی لیست مقادیر enum وضعیت Activity
   */
  ServiceCrmActivityStatusEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CrmActivityStatusEnum",
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        map((ret: any) => {
          return ret;
        }),
      );
  }

  /**
   * دریافت اطلاعات CrmActivityPriorityEnum
   * @returns Observable حاوی لیست مقادیر enum اولویت Activity
   */
  ServiceCrmActivityPriorityEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CrmActivityPriorityEnum",
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        map((ret: any) => {
          return ret;
        }),
      );
  }

  /**
   * دریافت اطلاعات CrmActivityRecurrenceEnum
   * @returns Observable حاوی لیست مقادیر enum تکرار Activity
   */
  ServiceCrmActivityRecurrenceEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CrmActivityRecurrenceEnum",
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        map((ret: any) => {
          return ret;
        }),
      );
  }

  /**
   * دریافت اطلاعات CrmOpportunityStatusEnum
   * @returns Observable حاوی لیست مقادیر enum وضعیت Opportunity
   */
  ServiceCrmOpportunityStatusEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CrmOpportunityStatusEnum",
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        map((ret: any) => {
          return ret;
        }),
      );
  }

  /**
   * دریافت اطلاعات CrmDealStatusEnum
   * @returns Observable حاوی لیست مقادیر enum وضعیت Deal
   */
  ServiceCrmDealStatusEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CrmDealStatusEnum",
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        map((ret: any) => {
          return ret;
        }),
      );
  }
}

