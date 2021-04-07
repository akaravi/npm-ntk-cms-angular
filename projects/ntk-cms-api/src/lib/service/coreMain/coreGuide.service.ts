import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreGuideModel } from '../../models/entity/coreMain/coreGuideModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { EditStepDtoModel } from '../../models/dto/core/editStepDtoModel';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class CoreGuideService extends ApiCmsServerBase<CoreGuideModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'CoreGuide';
  }
  ServiceGetAllTree(model: FilterModel): Observable<ErrorExceptionResult<CoreGuideModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    model.RowPerPage = 200;
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllTree', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEditStep(model: EditStepDtoModel<number>): Observable<ErrorExceptionResultBase> {
    if (!model) {
      model = new EditStepDtoModel<number>();
    }
    return this.http
      .put(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EditStep', model, {
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
