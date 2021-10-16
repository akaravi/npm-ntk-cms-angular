
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DonateTargetModel } from '../../models/entity/donate/donateTargetModel';

@Injectable()
export class DonateTargetService extends ApiCmsServerBase<DonateTargetModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'DonateTarget';
  }
}
