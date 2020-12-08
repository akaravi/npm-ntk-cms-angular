import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { WebDesignerMainIntroModel } from '../../models/entity/webDesigner/webDesignerMainIntroModel';


@Injectable()
export class WebDesignerMainIntroService extends ApiCmsServerBase<WebDesignerMainIntroModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'WebDesignerMainIntro';
  }

}
