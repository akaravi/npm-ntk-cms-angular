
import { CoreLogReportDataModel } from '../../models/entity/core-log/coreLogReportDataModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class CoreLogReportDataService extends ApiCmsServerBase<CoreLogReportDataModel, string>  {
  getModuleControllerUrl(): string {
    return 'CoreLogReportData';
  }
}
