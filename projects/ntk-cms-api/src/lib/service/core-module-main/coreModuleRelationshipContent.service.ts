
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleRelationshipContentModel } from '../../models/entity/core-module-main/coreModuleRelationshipContentModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleRelationshipContentService extends ApiCmsServerBase<CoreModuleRelationshipContentModel, number>  {  getModuleControllerUrl(): string {
    return 'CoreModuleRelationshipContent';
  }
}
