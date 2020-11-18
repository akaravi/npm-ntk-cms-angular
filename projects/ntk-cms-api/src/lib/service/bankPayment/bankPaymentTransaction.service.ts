import { BankPaymentTransactionModel } from '../../models/entity/bankPayment/bankPaymentTransactionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class BankPaymentTransactionService
  extends ApiCmsServerBase<BankPaymentTransactionModel, number>
   {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentTransaction';
  }
}
