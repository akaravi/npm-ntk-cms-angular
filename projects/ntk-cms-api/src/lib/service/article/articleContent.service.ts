import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { ArticleContentModel } from '../../models/entity/article/articleContentModel';
import { Observable } from 'rxjs';
import { ScoreClickDtoModel } from '../../models/dto/core/scoreClickDtoModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { Injectable } from '@angular/core';


@Injectable()
export class ArticleContentService extends ApiCmsServerBase<ArticleContentModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ArticleContent';
  }

  ServiceGetAllWithSimilarsId(Id: number, model: FilterModel): Observable<ErrorExceptionResult<ArticleContentModel>> {
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
        map((ret: ErrorExceptionResult<ArticleContentModel>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceGetAllWithTagId(Id: number, model: FilterModel): Observable<ErrorExceptionResult<ArticleContentModel>> {
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
        map((ret: ErrorExceptionResult<ArticleContentModel>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllWithCategoryUseInContentId(Id: number, model: FilterModel): Observable<ErrorExceptionResult<ArticleContentModel>> {
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
        map((ret: ErrorExceptionResult<ArticleContentModel>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceScoreClick(model: ScoreClickDtoModel): Observable<ErrorExceptionResultBase> {
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
        map((ret: ErrorExceptionResultBase) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceFavoriteAdd(Id: number): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/FavoriteAdd/' + Id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResultBase) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceFavoriteRemove(Id: number): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/FavoriteRemove/' + Id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResultBase) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
  ServiceFavoriteList(model: FilterModel): Observable<ErrorExceptionResult<ArticleContentModel>> {
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
        map((ret: ErrorExceptionResult<ArticleContentModel>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
