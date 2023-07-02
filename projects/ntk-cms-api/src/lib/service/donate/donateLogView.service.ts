
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DonateLogViewModel } from '../../models/entity/donate/donateLogViewModel';

@Injectable()
export class DonateLogViewService extends ApiCmsServerBase<DonateLogViewModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'DonateLogView';
  }
}
