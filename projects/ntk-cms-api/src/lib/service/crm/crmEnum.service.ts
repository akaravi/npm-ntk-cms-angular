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

  /**
   * دریافت اطلاعات CrmAccountRatingEnum
   * @returns Observable حاوی لیست مقادیر enum رتبه‌بندی Account
   */
  ServiceCrmAccountRatingEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CrmAccountRatingEnum",
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
   * دریافت اطلاعات CrmAccountTypeEnum
   * @returns Observable حاوی لیست مقادیر enum نوع Account
   */
  ServiceCrmAccountTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CrmAccountTypeEnum",
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
   * دریافت اطلاعات CrmCampaignStatusEnum
   * @returns Observable حاوی لیست مقادیر enum وضعیت Campaign
   */
  ServiceCrmCampaignStatusEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CrmCampaignStatusEnum",
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
   * دریافت اطلاعات CrmCampaignTypeEnum
   * @returns Observable حاوی لیست مقادیر enum نوع Campaign
   */
  ServiceCrmCampaignTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CrmCampaignTypeEnum",
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
   * دریافت اطلاعات CrmLeadStatusEnum
   * @returns Observable حاوی لیست مقادیر enum وضعیت Lead
   */
  ServiceCrmLeadStatusEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CrmLeadStatusEnum",
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
   * دریافت اطلاعات CrmLeadSourceEnum
   * @returns Observable حاوی لیست مقادیر enum منبع Lead
   */
  ServiceCrmLeadSourceEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CrmLeadSourceEnum",
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
   * دریافت اطلاعات CrmOpportunityTypeEnum
   * @returns Observable حاوی لیست مقادیر enum نوع Opportunity
   */
  ServiceCrmOpportunityTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CrmOpportunityTypeEnum",
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
   * دریافت اطلاعات CrmCampaignRelStatusEnum
   * @returns Observable حاوی لیست مقادیر enum وضعیت رابطه Campaign
   */
  ServiceCrmCampaignRelStatusEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CrmCampaignRelStatusEnum",
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

