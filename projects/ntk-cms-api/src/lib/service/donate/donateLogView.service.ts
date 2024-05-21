
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DonateLogViewModel } from '../../models/entity/donate/donateLogViewModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DonateLogViewService extends ApiCmsServerBase<DonateLogViewModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DonateLogView';
  }
}
