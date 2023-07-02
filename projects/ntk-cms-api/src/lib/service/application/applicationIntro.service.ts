import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApplicationIntroModel } from '../../models/entity/application/applicationIntroModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationIntroService extends ApiCmsServerBase<ApplicationIntroModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'ApplicationIntro';
  }
}
