import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class BiographyShareReciverCategoryService extends ApiCmsServerBase<any, number>  {
  getModuleCotrolerUrl(): string {
    return 'BiographyShareReciverCategory';
  }
}
