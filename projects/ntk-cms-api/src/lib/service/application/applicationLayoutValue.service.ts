import { Injectable } from '@angular/core';
import { ApplicationLayoutValueModel } from '../../models/entity/application/applicationLayoutValueModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationLayoutValueService extends ApiCmsServerBase<ApplicationLayoutValueModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ApplicationLayoutValue';
  }
}
