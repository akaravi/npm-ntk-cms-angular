import { Injectable } from "@angular/core";
import { FilterModel } from "../../models/entity/base/filterModel";
import { CrmSupplierPriceListModel } from "../../models/entity/crm/crmSupplierPriceListModel";
import { ApiCmsServerBase } from "../base/apiCmsServerBase.service";

@Injectable()
/**
 * سرویس API برای مدیریت لیست قیمت تأمین‌کننده (Supplier Price List)
 * متدهای پایه CRUD از ApiCmsServerBase به ارث می‌رسند.
 */
export class CrmSupplierPriceListService extends ApiCmsServerBase<
  CrmSupplierPriceListModel,
  string,
  FilterModel
> {
  /** نام کنترلر ماژول در سمت سرور */
  getModuleControllerUrl(): string {
    return "CrmSupplierPriceList";
  }
}


