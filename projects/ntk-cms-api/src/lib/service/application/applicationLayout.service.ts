import { catchError, map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApplicationLayoutModel } from '../../models/entity/application/applicationLayoutModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { FilterModel } from '../../models/entity/base/filterModel';
import { Injectable } from '@angular/core';


@Injectable()
export class ApplicationLayoutService extends ApiCmsServerBase<ApplicationLayoutModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ApplicationLayout';
  }
  ServiceGetOneWithJsonFormat(model: FilterModel): Observable<ErrorExcptionResult<ApplicationLayoutModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetOneWithJsonFormat',
        model,
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<ApplicationLayoutModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }


  ServiceGetAllWithJsonFormat(model: FilterModel): Observable<ErrorExcptionResult<ApplicationLayoutModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithJsonFormat',
        model,
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<ApplicationLayoutModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
