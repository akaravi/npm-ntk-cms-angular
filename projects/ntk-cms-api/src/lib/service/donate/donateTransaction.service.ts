
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DonateTransactionModel } from '../../models/entity/donate/donateTransactionModel';

@Injectable()
export class DonateTransactionService extends ApiCmsServerBase<DonateTransactionModel, number>  {
  getModuleControllerUrl(): string {
    return 'DonateTransaction';
  }
}
