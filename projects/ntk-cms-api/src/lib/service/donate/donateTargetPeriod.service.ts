
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DonateTargetPeriodModel } from '../../models/entity/donate/donateTargetPeriodModel';

@Injectable()
export class DonateTargetPeriodService extends ApiCmsServerBase<DonateTargetPeriodModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'DonateTargetPeriod';
  }
}
