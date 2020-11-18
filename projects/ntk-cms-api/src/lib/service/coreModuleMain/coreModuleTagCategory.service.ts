
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleTagCategoryModel } from '../../models/entity/coreModuleMain/coreModuleTagCategoryModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleTagCategoryService extends ApiCmsServerBase<CoreModuleTagCategoryModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreModuleTagCategory';
  }
}
