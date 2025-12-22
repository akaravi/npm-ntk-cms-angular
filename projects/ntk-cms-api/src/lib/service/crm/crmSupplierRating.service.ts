import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ErrorExceptionResult } from "../../models/entity/base/errorExceptionResult";
import { FilterModel } from "../../models/entity/base/filterModel";
import { CrmDecimalValueDtoModel } from "../../models/dto/crm/crmDecimalValueDtoModel";
import { CrmSupplierRatingModel } from "../../models/entity/crm/crmSupplierRatingModel";
import { ApiCmsServerBase } from "../base/apiCmsServerBase.service";

@Injectable()
/**
 * سرویس API برای مدیریت امتیازدهی تأمین‌کننده (Supplier Rating)
 * متدهای پایه CRUD از ApiCmsServerBase به ارث می‌رسند.
 */
export class CrmSupplierRatingService extends ApiCmsServerBase<
  CrmSupplierRatingModel,
  string,
  FilterModel
> {
  /** نام کنترلر ماژول در سمت سرور */
  getModuleControllerUrl(): string {
    return "CrmSupplierRating";
  }

  /**
   * محاسبه میانگین امتیاز یک Account.
   * @param accountId - شناسه Account
   * @returns Observable حاوی میانگین امتیاز
   * @example
   * ```typescript
   * this.crmSupplierRatingService.ServiceGetAverageRatingByAccount(accountId)
   *   .subscribe(result => {
   *     if (result.isSuccess) {
   *       const averageRating = result.item.value;
   *       console.log('Average rating:', averageRating);
   *     }
   *   });
   * ```
   */
  ServiceGetAverageRatingByAccount(
    accountId: string
  ): Observable<ErrorExceptionResult<CrmDecimalValueDtoModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/GetAverageRatingByAccount/" +
          accountId,
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


