
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DonateSponsorModel } from '../../models/entity/donate/donateSponsorModel';

@Injectable({
  providedIn: 'root',
})
export class DonateSponsorService extends ApiCmsServerBase<DonateSponsorModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'DonateSponsor';
  }
}
