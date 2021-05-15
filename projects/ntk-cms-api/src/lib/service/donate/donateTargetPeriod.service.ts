
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DonateTargetPeriodModel } from '../../models/entity/donate/donateTargetPeriodModel';

@Injectable()
export class DonateTargetPeriodService extends ApiCmsServerBase<DonateTargetPeriodModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'DonateTargetPeriod';
  }
}
