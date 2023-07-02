
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DonateTargetPeriodSponsorModel } from '../../models/entity/donate/donateTargetPeriodSponsorModel';

@Injectable()
export class DonateTargetPeriodSponsorService extends ApiCmsServerBase<DonateTargetPeriodSponsorModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'DonateTargetPeriodSponsor';
  }
}
