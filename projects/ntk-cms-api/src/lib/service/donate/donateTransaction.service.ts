
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DonateTransactionModel } from '../../models/entity/donate/donateTransactionModel';

@Injectable({
  providedIn: 'root',
})
export class DonateTransactionService extends ApiCmsServerBase<DonateTransactionModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'DonateTransaction';
  }
}
