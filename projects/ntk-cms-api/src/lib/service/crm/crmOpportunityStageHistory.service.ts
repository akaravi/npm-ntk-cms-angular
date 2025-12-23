import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ErrorExceptionResult } from "../../models/entity/base/errorExceptionResult";
import { FilterModel } from "../../models/entity/base/filterModel";
import { CrmOpportunityStageHistoryModel } from "../../models/entity/crm/crmOpportunityStageHistoryModel";
import { ApiCmsServerBase } from "../base/apiCmsServerBase.service";

/**
 * سرویس API برای مدیریت تاریخچه مرحله فرصت CRM (Opportunity Stage History).
 * این سرویس عملیات CRUD و جستجو برای تاریخچه تغییرات Stage در Opportunity را فراهم می‌کند.
 */
@Injectable()
export class CrmOpportunityStageHistoryService extends ApiCmsServerBase<
  CrmOpportunityStageHistoryModel,
  string,
  FilterModel
> {
  /** نام کنترلر ماژول در سمت سرور */
  getModuleControllerUrl(): string {
    return "CrmOpportunityStageHistory";
  }

  /**
   * دریافت تاریخچه Stageهای یک Opportunity.
   * @param opportunityId شناسه Opportunity
   * @returns Observable از ErrorExceptionResult حاوی لیست تاریخچه Stageها
   */
  ServiceGetHistoryByOpportunity(
    opportunityId: string
  ): Observable<ErrorExceptionResult<CrmOpportunityStageHistoryModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/GetByOpportunity/" +
          opportunityId,
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

  /**
   * ایجاد رکورد جدید در تاریخچه Stage.
   * @param opportunityId شناسه Opportunity
   * @param stage نام Stage
   * @param amount مبلغ (اختیاری)
   * @param probability احتمال موفقیت (اختیاری)
   * @param expectedRevenue درآمد پیش‌بینی شده (اختیاری)
   * @param closeDate تاریخ بسته شدن (اختیاری)
   * @returns Observable از ErrorExceptionResult حاوی رکورد ایجاد شده
   */
  ServiceCreateHistoryEntry(
    opportunityId: string,
    stage: string,
    amount?: number,
    probability?: number,
    expectedRevenue?: number,
    closeDate?: Date
  ): Observable<ErrorExceptionResult<CrmOpportunityStageHistoryModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + "/CreateHistoryEntry",
        {
          opportunityId,
          stage,
          amount,
          probability,
          expectedRevenue,
          closeDate,
        },
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

