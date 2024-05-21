import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { WebDesignerLogMemberInfoModel } from '../../models/entity/web-designer/webDesignerLogMemberInfoModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class WebDesignerLogMemberInfoService extends ApiCmsServerBase<WebDesignerLogMemberInfoModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'WebDesignerLogMemberInfo';
  }

}
