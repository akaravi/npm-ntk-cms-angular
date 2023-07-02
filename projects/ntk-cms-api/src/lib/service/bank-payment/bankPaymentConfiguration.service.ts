import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import {
  BankPaymentModuleConfigAdminMainValuesModel,
  BankPaymentModuleConfigSiteAccessValuesModel,
  BankPaymentModuleConfigSiteValuesModel,
  BankPaymentModuleSiteStorageValuesModel
} from '../../models/entity/bank-payment/bankPaymentConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class BankPaymentConfigurationService extends
  ApiServerConfigSiteBase<BankPaymentModuleConfigAdminMainValuesModel,
  BankPaymentModuleConfigSiteValuesModel,
  BankPaymentModuleConfigSiteAccessValuesModel,
  BankPaymentModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'BankPayment';
  }
}
