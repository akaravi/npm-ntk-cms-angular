
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreLogTokenConnectionModel } from '../../models/entity/core-log/coreLogTokenConnectionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreLogTokenConnectionService extends ApiCmsServerBase<CoreLogTokenConnectionModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreLogTokenConnection';
  }
}
