
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreModuleLogReportAbuseModel } from '../../models/entity/core-module-log/coreModuleLogReportAbuseModel';


@Injectable()
export class CoreModuleLogReportAbuseservice extends ApiCmsServerBase<CoreModuleLogReportAbuseModel, string>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogReportAbuse';
  }
}

