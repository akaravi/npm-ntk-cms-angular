
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DonateLogViewModel } from '../../models/entity/donate/donateLogViewModel';

@Injectable({
  providedIn: 'root',
})
export class DonateLogViewService extends ApiCmsServerBase<DonateLogViewModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'DonateLogView';
  }
}
