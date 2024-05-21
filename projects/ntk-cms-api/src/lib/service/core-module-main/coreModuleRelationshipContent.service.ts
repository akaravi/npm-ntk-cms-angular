
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleRelationshipContentModel } from '../../models/entity/core-module-main/coreModuleRelationshipContentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreModuleRelationshipContentService extends ApiCmsServerBase<CoreModuleRelationshipContentModel, number, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreModuleRelationshipContent';
    }
}
