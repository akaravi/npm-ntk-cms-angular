
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateAccountUserWorkAreaModel } from '../../models/entity/estate/estateAccountUserWorkAreaModel';

@Injectable()
export class EstateAccountUserWorkAreaService extends ApiCmsServerBase<EstateAccountUserWorkAreaModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstateAccountUserWorkArea';
  }
}
