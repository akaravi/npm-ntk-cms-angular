import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class ChartShareMainAdminSettingService extends ApiCmsServerBase<any, number>  {
  getModuleControllerUrl(): string {
    return 'ChartShareMainAdminSetting';
  }
}
