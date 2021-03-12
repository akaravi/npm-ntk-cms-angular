import { BiographyContentWithSimilarLocationPeriodDtoModel } from './../../models/dto/biography/biographyContentWithSimilarLocationPeriodDtoModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { BiographyContentModel } from '../../models/entity/biography/biographyContentModel';
import { Observable } from 'rxjs';
import { ScoreClickDtoModel } from '../../models/dto/core/scoreClickDtoModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { Injectable } from '@angular/core';
import { BiographyContentWithDatePeriodEndDtoModel } from '../../models/dto/biography/biographyContentWithDatePeriodEndDtoModel';
import { BiographyContentWithSimilarDatePeriodEndDtoModel } from '../../models/dto/biography/biographyContentWithSimilarDatePeriodEndDtoModel';
import { BiographyContentWithSimilarDatePeriodStartDayAndMonthOfYearDtoModel } from '../../models/dto/biography/biographyContentWithSimilarDatePeriodStartDayAndMonthOfYearDtoModel';
import { BiographyContentWithSimilarDatePeriodStartDayOfYearDtoModel } from '../../models/dto/biography/biographyContentWithSimilarDatePeriodStartDayOfYearDtoModel';
import { BiographyContentWithSimilarDatePeriodStartDtoModel } from '../../models/dto/biography/biographyContentWithSimilarDatePeriodStartDtoModel';
import { BiographyContentWithSimilarDatePeriodStartMonthOfYearListDtoModel } from '../../models/dto/biography/biographyContentWithSimilarDatePeriodStartMonthOfYearListDtoModel';


@Injectable()
export class BiographyContentService extends ApiCmsServerBase<BiographyContentModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'BiographyContent';
  }

  ServiceGetAllWithSimilarsId(Id: number, model: FilterModel): Observable<ErrorExceptionResult<BiographyContentModel>> {
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
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceGetAllWithTagId(Id: number, model: FilterModel): Observable<ErrorExceptionResult<BiographyContentModel>> {
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
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllWithCategoryUseInContentId(Id: number, model: FilterModel): Observable<ErrorExceptionResult<BiographyContentModel>> {
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
        map((ret: any) => {
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
        map((ret: any) => {
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
        map((ret: any) => {
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
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
  ServiceFavoriteList(model: FilterModel): Observable<ErrorExceptionResult<BiographyContentModel>> {
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
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceGetAllWithSimilarLocationPeriodStart(model: BiographyContentWithSimilarLocationPeriodDtoModel):
    Observable<ErrorExceptionResult<BiographyContentModel>> {
    if (model == null) {
      model = new BiographyContentWithSimilarLocationPeriodDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithSimilarLocationPeriodStart', model, {
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
  ServiceGetAllWithSimilarLocationPeriodEnd(model: BiographyContentWithSimilarLocationPeriodDtoModel):
    Observable<ErrorExceptionResult<BiographyContentModel>> {
    if (model == null) {
      model = new BiographyContentWithSimilarLocationPeriodDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithSimilarLocationPeriodEnd', model, {
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
  ServiceGetAllWithSimilarDatePeriodStartMonthOfYear(model: BiographyContentWithSimilarDatePeriodStartMonthOfYearListDtoModel):
    Observable<ErrorExceptionResult<BiographyContentModel>> {
    if (model == null) {
      model = new BiographyContentWithSimilarDatePeriodStartMonthOfYearListDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithSimilarDatePeriodStartMonthOfYear', model, {
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
  ServiceGetAllWithSimilarDatePeriodStart(model: BiographyContentWithSimilarDatePeriodStartDtoModel):
    Observable<ErrorExceptionResult<BiographyContentModel>> {
    if (model == null) {
      model = new BiographyContentWithSimilarDatePeriodStartDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithSimilarDatePeriodStart', model, {
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
  ServiceGetAllWithSimilarDatePeriodStartDayOfYear(model: BiographyContentWithSimilarDatePeriodStartDayOfYearDtoModel):
    Observable<ErrorExceptionResult<BiographyContentModel>> {
    if (model == null) {
      model = new BiographyContentWithSimilarDatePeriodStartDayOfYearDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithSimilarDatePeriodStartDayOfYear', model, {
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
  ServiceGetAllWithSimilarDatePeriodStartDayAndMonthOfYear(model: BiographyContentWithSimilarDatePeriodStartDayAndMonthOfYearDtoModel):
    Observable<ErrorExceptionResult<BiographyContentModel>> {
    if (model == null) {
      model = new BiographyContentWithSimilarDatePeriodStartDayAndMonthOfYearDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithSimilarDatePeriodStartDayAndMonthOfYear', model, {
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


  ServiceGetAllGetAllWithSimilarDatePeriodEnd(model: BiographyContentWithSimilarDatePeriodEndDtoModel):
    Observable<ErrorExceptionResult<BiographyContentModel>> {
    if (model == null) {
      model = new BiographyContentWithSimilarDatePeriodEndDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithSimilarDatePeriodEnd', model, {
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

  ServiceGetAllGetAllWithDatePeriodEnd(model: BiographyContentWithDatePeriodEndDtoModel):
    Observable<ErrorExceptionResult<BiographyContentModel>> {
    if (model == null) {
      model = new BiographyContentWithDatePeriodEndDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithDatePeriodEnd', model, {
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




}
