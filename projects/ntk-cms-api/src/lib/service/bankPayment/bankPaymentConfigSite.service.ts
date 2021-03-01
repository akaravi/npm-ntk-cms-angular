import { Injectable } from '@angular/core';
import {
  BankPaymentModuleConfigAdminMainValuesModel,
  BankPaymentModuleConfigSiteAccessValuesModel,
  BankPaymentModuleConfigSiteValuesModel,
  BankPaymentModuleSiteStorageValuesModel
} from '../../models/entity/bankPayment/bankPaymentSiteConfigModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class BankPaymentConfigSiteService extends
  ApiServerConfigSiteBase<BankPaymentModuleConfigAdminMainValuesModel,
  BankPaymentModuleConfigSiteValuesModel,
  BankPaymentModuleConfigSiteAccessValuesModel,
  BankPaymentModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'BankPayment';
  }
}
