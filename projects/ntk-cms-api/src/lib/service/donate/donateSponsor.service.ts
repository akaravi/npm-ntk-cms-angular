
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DonateSponsorModel } from '../../models/entity/donate/donateSponsorModel';

@Injectable()
export class DonateSponsorService extends ApiCmsServerBase<DonateSponsorModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'DonateSponsor';
  }
}
