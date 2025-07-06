import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { BiographyContentWithDatePeriodEndDtoModel } from '../../models/dto/biography/biographyContentWithDatePeriodEndDtoModel';
import { BiographyContentWithSimilarDatePeriodEndDtoModel } from '../../models/dto/biography/biographyContentWithSimilarDatePeriodEndDtoModel';
import { BiographyContentWithSimilarDatePeriodStartDayAndMonthOfYearDtoModel } from '../../models/dto/biography/biographyContentWithSimilarDatePeriodStartDayAndMonthOfYearDtoModel';
import { BiographyContentWithSimilarDatePeriodStartDayOfYearDtoModel } from '../../models/dto/biography/biographyContentWithSimilarDatePeriodStartDayOfYearDtoModel';
import { BiographyContentWithSimilarDatePeriodStartDtoModel } from '../../models/dto/biography/biographyContentWithSimilarDatePeriodStartDtoModel';
import { BiographyContentWithSimilarDatePeriodStartMonthOfYearListDtoModel } from '../../models/dto/biography/biographyContentWithSimilarDatePeriodStartMonthOfYearListDtoModel';
import { ScoreClickDtoModel } from '../../models/dto/core-main/scoreClickDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { BiographyContentModel } from '../../models/entity/biography/biographyContentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { BiographyContentWithSimilarLocationPeriodDtoModel } from './../../models/dto/biography/biographyContentWithSimilarLocationPeriodDtoModel';


@Injectable()
export class BiographyContentService extends ApiCmsServerBase<BiographyContentModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'BiographyContent';
  }

  ServiceGetAllWithHierarchyCategoryId(Id: number, model: FilterModel): Observable<ErrorExceptionResult<BiographyContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithHierarchyCategoryId/' + Id, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllWithSimilarsId(Id: number, model: FilterModel): Observable<ErrorExceptionResult<BiographyContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithSimilarsId/' + Id, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithTagId/' + Id, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithCategoryUseInContentId/' + Id, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ScoreClick', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceFavoriteAdd(Id: number): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/FavoriteAdd/' + Id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceFavoriteRemove(Id: number): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/FavoriteRemove/' + Id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/FavoriteList', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithSimilarLocationPeriodStart', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithSimilarLocationPeriodEnd', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithSimilarDatePeriodStartMonthOfYear', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithSimilarDatePeriodStart', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithSimilarDatePeriodStartDayOfYear', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithSimilarDatePeriodStartDayAndMonthOfYear', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithSimilarDatePeriodEnd', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithDatePeriodEnd', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }




}
