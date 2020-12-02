import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { BlogContentModel } from '../../models/entity/blog/blogContentModel';
import { Observable } from 'rxjs';
import { ScoreClickDtoModel } from '../../models/dto/core/scoreClickDtoModel';
import { ErrorExcptionResultBase } from '../../models/entity/base/errorExcptionResultBase';
import { Injectable } from '@angular/core';


@Injectable()
export class BlogContentService extends ApiCmsServerBase<BlogContentModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'BlogContent';
  }

  ServiceGetAllWithSimilarsId(Id: number, model: FilterModel): Observable<ErrorExcptionResult<BlogContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithSimilarsId/' + Id, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<BlogContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceGetAllWithTagId(Id: number, model: FilterModel): Observable<ErrorExcptionResult<BlogContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithTagId/' + Id, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<BlogContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllWithCategoryUseInContentId(Id: number, model: FilterModel): Observable<ErrorExcptionResult<BlogContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithCategoryUseInContentId/' + Id, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<BlogContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceScoreClick(model: ScoreClickDtoModel): Observable<ErrorExcptionResultBase> {
    if (model == null) {
      model = new ScoreClickDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/ScoreClick', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceFavoriteAdd(Id: number): Observable<ErrorExcptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/FavoriteAdd/' + Id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceFavoriteRemove(Id: number): Observable<ErrorExcptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/FavoriteRemove/' + Id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }
  ServiceFavoriteList(model: FilterModel): Observable<ErrorExcptionResult<BlogContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/FavoriteList', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<BlogContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}