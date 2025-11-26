import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ScoreClickDtoModel } from '../../models/dto/core-main/scoreClickDtoModel';
import { CoreModuleReportAbuseDtoModel } from '../../models/dto/core-module/coreModuleReportAbuseDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ChartContentModel } from '../../models/entity/chart/chartContentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class ChartContentService extends ApiCmsServerBase<
  ChartContentModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'ChartContent';
  }

  ServiceGetAllWithHierarchyCategoryId(
    Id: number,
    model: FilterModel
  ): Observable<ErrorExceptionResult<ChartContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetAllWithHierarchyCategoryId/' +
          Id,
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceGetAllWithSimilarsId(
    Id: number,
    model: FilterModel
  ): Observable<ErrorExceptionResult<ChartContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetAllWithSimilarsId/' +
          Id,
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }

  ServiceGetAllWithTagId(
    Id: number,
    model: FilterModel
  ): Observable<ErrorExceptionResult<ChartContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetAllWithTagId/' +
          Id,
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceGetAllWithCategoryUseInContentId(
    Id: number,
    model: FilterModel
  ): Observable<ErrorExceptionResult<ChartContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetAllWithCategoryUseInContentId/' +
          Id,
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }

  ServiceScoreClick(
    model: ScoreClickDtoModel
  ): Observable<ErrorExceptionResultBase> {
    if (model == null) {
      model = new ScoreClickDtoModel();
    }
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/ScoreClick',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }

  ServiceFavoriteAdd(Id: number): Observable<ErrorExceptionResultBase> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/FavoriteAdd/' +
          Id,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }

  ServiceFavoriteRemove(Id: number): Observable<ErrorExceptionResultBase> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/FavoriteRemove/' +
          Id,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceFavoriteList(
    model: FilterModel
  ): Observable<ErrorExceptionResult<ChartContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/FavoriteList',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceReportAbuseAdd(
    model: CoreModuleReportAbuseDtoModel
  ): Observable<ErrorExceptionResult<ChartContentModel>> {
    if (model == null) {
      model = new CoreModuleReportAbuseDtoModel();
    }
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/ReportAbuseAdd',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceReportAbuseList(
    model: FilterModel
  ): Observable<ErrorExceptionResult<ChartContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/ReportAbuseList',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
}
