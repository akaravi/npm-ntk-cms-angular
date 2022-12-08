import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreModuleEntityReportDataFileModel } from '../../models/entity/core-main/coreModuleEntityReportDataFileModel';


@Injectable()
export class CoreModuleEntityReportDataFileService extends ApiCmsServerBase<CoreModuleEntityReportDataFileModel, string>  {
  getModuleControllerUrl(): string {
    return 'CoreModuleEntityReportDataFile';
  }
 
}
