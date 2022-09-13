import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { WebDesignerLogMemberInfoModel } from '../../models/entity/web-designer/webDesignerLogMemberInfoModel';


@Injectable()
export class WebDesignerLogMemberInfoService extends ApiCmsServerBase<WebDesignerLogMemberInfoModel, string>  {
  getModuleControllerUrl(): string {
    return 'WebDesignerLogMemberInfo';
  }

}
