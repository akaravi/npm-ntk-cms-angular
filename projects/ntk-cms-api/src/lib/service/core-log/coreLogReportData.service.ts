
import { CoreLogReportDataModel } from '../../models/entity/core-log/coreLogReportDataModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreLogReportDataService extends ApiCmsServerBase<CoreLogReportDataModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreLogReportData';
  }
}
