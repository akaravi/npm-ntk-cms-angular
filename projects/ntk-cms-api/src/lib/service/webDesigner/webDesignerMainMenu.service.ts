import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { WebDesignerMainMenuModel } from '../../models/entity/webDesigner/webDesignerMainMenuModel';


@Injectable()
export class WebDesignerMainMenuService extends ApiCmsServerBase<WebDesignerMainMenuModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'WebDesignerMainMenu';
  }

}
