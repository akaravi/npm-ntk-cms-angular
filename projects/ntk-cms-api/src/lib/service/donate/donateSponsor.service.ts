
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DonateSponsorModel } from '../../models/entity/donate/donateSponsorModel';

@Injectable()
export class DonateSponsorService extends ApiCmsServerBase<DonateSponsorModel, number>  {
  getModuleControllerUrl(): string {
    return 'DonateSponsor';
  }
}
