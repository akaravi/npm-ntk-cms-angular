
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyShareSiteModel } from '../../models/entity/estate/estatePropertyShareSiteModel';

@Injectable()
export class EstatePropertyShareSiteService extends ApiCmsServerBase<EstatePropertyShareSiteModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyShareSite';
  }
}
