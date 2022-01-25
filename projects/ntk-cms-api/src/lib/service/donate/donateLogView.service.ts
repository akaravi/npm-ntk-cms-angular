
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DonateLogViewModel } from '../../models/entity/donate/donateLogViewModel';

@Injectable()
export class DonateLogViewService extends ApiCmsServerBase<DonateLogViewModel, string>  {
  getModuleControllerUrl(): string {
    return 'DonateLogView';
  }
}
