import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleEntityReportFileModel } from '../../models/entity/core-main/coreModuleEntityReportFileModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreModuleEntityReportFileService extends ApiCmsServerBase<CoreModuleEntityReportFileModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreModuleEntityReportFile';
  }

}
