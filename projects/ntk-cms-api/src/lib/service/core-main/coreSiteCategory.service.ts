import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreSiteCategoryModel } from '../../models/entity/core-main/coreSiteCategoryModel';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CoreSiteCategoryService extends ApiCmsServerBase<CoreSiteCategoryModel, number>  {  getModuleCotrolerUrl(): string {
    return 'CoreSiteCategory';
  }
}
