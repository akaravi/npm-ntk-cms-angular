import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { WebDesignerLogPageSafeModel } from '../../models/entity/webDesigner/webDesignerLogPageSafeModel';


@Injectable()
export class WebDesignerLogPageSafeService extends ApiCmsServerBase<WebDesignerLogPageSafeModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'WebDesignerLogPageSafe';
  }

}
