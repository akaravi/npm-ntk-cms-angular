
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DonateTargetPeriodSponsorModel } from '../../models/entity/donate/donateTargetPeriodSponsorModel';

@Injectable()
export class DonateTargetPeriodSponsorService extends ApiCmsServerBase<DonateTargetPeriodSponsorModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'DonateTargetPeriodSponsor';
  }
}
