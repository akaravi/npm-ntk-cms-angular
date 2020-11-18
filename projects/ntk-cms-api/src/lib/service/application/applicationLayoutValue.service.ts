import { Injectable } from '@angular/core';
import { ApplicationLayoutValueModel } from '../../models/entity/application/ApplicationLayoutValueModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationLayoutValueService extends ApiCmsServerBase<ApplicationLayoutValueModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ApplicationLayoutValue';
  }
}
