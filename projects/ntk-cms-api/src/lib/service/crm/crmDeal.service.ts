import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ErrorExceptionResult } from "../../models/entity/base/errorExceptionResult";
import { FilterModel } from "../../models/entity/base/filterModel";
import { CrmDecimalValueDtoModel } from "../../models/dto/crm/crmDecimalValueDtoModel";
import { CrmDealModel } from "../../models/entity/crm/crmDealModel";
import { ApiCmsServerBase } from "../base/apiCmsServerBase.service";

@Injectable()
export class CrmDealService extends ApiCmsServerBase<CrmDealModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return "CrmDeal";
  }

  /**
   * محاسبه مجموع ارزش Dealهای یک Opportunity.
   * @param opportunityId - شناسه Opportunity
   * @returns Observable حاوی مجموع ارزش Dealها
   * @example
   * ```typescript
   * this.crmDealService.ServiceCalculateTotalDealValueByOpportunity(opportunityId)
   *   .subscribe(result => {
   *     if (result.isSuccess) {
   *       const totalValue = result.item.value;
   *       console.log('Total deal value:', totalValue);
   *     }
   *   });
   * ```
   */
  ServiceCalculateTotalDealValueByOpportunity(
    opportunityId: string
  ): Observable<ErrorExceptionResult<CrmDecimalValueDtoModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          "/CalculateTotalDealValueByOpportunity/" +
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
}


