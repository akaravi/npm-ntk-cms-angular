import { BiographyContentWithSimilarLocationPeriodDtoModel } from './../../models/dto/biography/biographyContentWithSimilarLocationPeriodDtoModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { BiographyContentModel } from '../../models/entity/biography/biographyContentModel';
import { Observable } from 'rxjs';
import { ScoreClickDtoModel } from '../../models/dto/core/scoreClickDtoModel';
import { ErrorExcptionResultBase } from '../../models/entity/base/errorExcptionResultBase';
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

  ServiceGetAllWithSimilarsId(Id: number, model: FilterModel): Observable<ErrorExcptionResult<BiographyContentModel>> {
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
        map((ret: ErrorExcptionResult<BiographyContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceGetAllWithTagId(Id: number, model: FilterModel): Observable<ErrorExcptionResult<BiographyContentModel>> {
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
        map((ret: ErrorExcptionResult<BiographyContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllWithCategoryUseInContentId(Id: number, model: FilterModel): Observable<ErrorExcptionResult<BiographyContentModel>> {
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
        map((ret: ErrorExcptionResult<BiographyContentModel>) => {
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
  ServiceFavoriteList(model: FilterModel): Observable<ErrorExcptionResult<BiographyContentModel>> {
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
        map((ret: ErrorExcptionResult<BiographyContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceGetAllWithSimilarLocationPeriodStart(model: BiographyContentWithSimilarLocationPeriodDtoModel): Observable<ErrorExcptionResult<BiographyContentModel>> {
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
        map((ret: ErrorExcptionResult<BiographyContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllWithSimilarLocationPeriodEnd(model: BiographyContentWithSimilarLocationPeriodDtoModel): Observable<ErrorExcptionResult<BiographyContentModel>> {
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
        map((ret: ErrorExcptionResult<BiographyContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllWithSimilarDatePeriodStartMonthOfYear(model: BiographyContentWithSimilarDatePeriodStartMonthOfYearListDtoModel): Observable<ErrorExcptionResult<BiographyContentModel>> {
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
        map((ret: ErrorExcptionResult<BiographyContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllWithSimilarDatePeriodStart(model: BiographyContentWithSimilarDatePeriodStartDtoModel): Observable<ErrorExcptionResult<BiographyContentModel>> {
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
        map((ret: ErrorExcptionResult<BiographyContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllWithSimilarDatePeriodStartDayOfYear(model: BiographyContentWithSimilarDatePeriodStartDayOfYearDtoModel): Observable<ErrorExcptionResult<BiographyContentModel>> {
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
        map((ret: ErrorExcptionResult<BiographyContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllWithSimilarDatePeriodStartDayAndMonthOfYear(model: BiographyContentWithSimilarDatePeriodStartDayAndMonthOfYearDtoModel): Observable<ErrorExcptionResult<BiographyContentModel>> {
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
        map((ret: ErrorExcptionResult<BiographyContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }


  ServiceGetAllGetAllWithSimilarDatePeriodEnd(model: BiographyContentWithSimilarDatePeriodEndDtoModel): Observable<ErrorExcptionResult<BiographyContentModel>> {
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
        map((ret: ErrorExcptionResult<BiographyContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceGetAllGetAllWithDatePeriodEnd(model: BiographyContentWithDatePeriodEndDtoModel): Observable<ErrorExcptionResult<BiographyContentModel>> {
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
        map((ret: ErrorExcptionResult<BiographyContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }




}
