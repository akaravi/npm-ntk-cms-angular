
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleRelationshipContentModel } from '../../models/entity/core-module-main/coreModuleRelationshipContentModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreModuleRelationshipContentService extends ApiCmsServerBase<CoreModuleRelationshipContentModel, number,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreModuleRelationshipContent';
  }
}
