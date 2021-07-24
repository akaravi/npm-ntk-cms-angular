
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DonateTargetPeriodModel } from '../../models/entity/donate/donateTargetPeriodModel';

@Injectable({
  providedIn: 'root',
})
export class DonateTargetPeriodService extends ApiCmsServerBase<DonateTargetPeriodModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'DonateTargetPeriod';
  }
}
