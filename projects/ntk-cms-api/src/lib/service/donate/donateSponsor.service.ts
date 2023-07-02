
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DonateSponsorModel } from '../../models/entity/donate/donateSponsorModel';

@Injectable()
export class DonateSponsorService extends ApiCmsServerBase<DonateSponsorModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'DonateSponsor';
  }
}
