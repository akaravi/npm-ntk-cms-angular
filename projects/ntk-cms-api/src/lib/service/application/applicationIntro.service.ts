import { Injectable } from '@angular/core';
import { ApplicationIntroModel } from '../../models/entity/application/applicationIntroModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationIntroService extends ApiCmsServerBase<ApplicationIntroModel, number>  {
  getModuleControllerUrl(): string {
    return 'ApplicationIntro';
  }
}
