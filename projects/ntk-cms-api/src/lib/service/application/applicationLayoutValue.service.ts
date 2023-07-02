import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApplicationLayoutValueModel } from '../../models/entity/application/applicationLayoutValueModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationLayoutValueService extends ApiCmsServerBase<ApplicationLayoutValueModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'ApplicationLayoutValue';
  }
}
