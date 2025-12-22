import { Injectable } from "@angular/core";
import { FilterModel } from "../../models/entity/base/filterModel";
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
}


