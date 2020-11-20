import { Injectable } from '@angular/core';
import { ApplicationThemeConfigModel } from '../../models/entity/application/applicationThemeConfigModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationThemeConfigService extends ApiCmsServerBase<ApplicationThemeConfigModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ApplicationThemeConfig';
  }
}
