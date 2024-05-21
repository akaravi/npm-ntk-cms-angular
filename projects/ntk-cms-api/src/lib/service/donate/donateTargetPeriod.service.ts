
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DonateTargetPeriodModel } from '../../models/entity/donate/donateTargetPeriodModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DonateTargetPeriodService extends ApiCmsServerBase<DonateTargetPeriodModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DonateTargetPeriod';
  }
}
