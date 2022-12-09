import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreModuleEntityReportFileModel } from '../../models/entity/core-main/coreModuleEntityReportFileModel';


@Injectable()
export class CoreModuleEntityReportFileService extends ApiCmsServerBase<CoreModuleEntityReportFileModel, string>  {
  getModuleControllerUrl(): string {
    return 'CoreModuleEntityReportFile';
  }
 
}
