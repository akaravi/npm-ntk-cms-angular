import { Injectable } from '@angular/core';
import { ApplicationLayoutValueModel } from '../../models/entity/application/applicationLayoutValueModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationLayoutValueService extends ApiCmsServerBase<ApplicationLayoutValueModel, number>  {
  getModuleControllerUrl(): string {
    return 'ApplicationLayoutValue';
  }
}
