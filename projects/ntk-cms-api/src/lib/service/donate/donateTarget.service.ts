
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DonateTargetModel } from '../../models/entity/donate/donateTargetModel';

@Injectable()
export class DonateTargetService extends ApiCmsServerBase<DonateTargetModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'DonateTarget';
  }
}
