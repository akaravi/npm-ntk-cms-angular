import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { WebDesignerLogMemberInfoModel } from '../../models/entity/web-designer/webDesignerLogMemberInfoModel';


@Injectable()
export class WebDesignerLogMemberInfoService extends ApiCmsServerBase<WebDesignerLogMemberInfoModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'WebDesignerLogMemberInfo';
  }

}
