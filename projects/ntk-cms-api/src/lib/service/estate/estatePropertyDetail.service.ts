
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertyDetailModel } from '../../models/entity/estate/estatePropertyDetailModel';
import { EditStepDtoModel } from '../../models/dto/core-main/editStepDtoModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class EstatePropertyDetailService extends ApiCmsServerBase<EstatePropertyDetailModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyDetail';
  }
  ServiceEditStep(model: EditStepDtoModel<string>): Observable<ErrorExceptionResultBase> {
    if (!model) {
      model = new EditStepDtoModel<string>();
    }
    return this.http
      .put(this.getBaseUrl() + this.getModuleControllerUrl() + '/EditStep', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
}
