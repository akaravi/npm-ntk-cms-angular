
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyShareSiteModel } from '../../models/entity/estate/estatePropertyShareSiteModel';

@Injectable({
  providedIn: 'root',
})
export class EstatePropertyShareSiteService extends ApiCmsServerBase<EstatePropertyShareSiteModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstatePropertyShareSite';
  }
}
