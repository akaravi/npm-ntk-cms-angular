import { ApplicationScoreDtoModel } from '../../models/dto/application/applicationScoreDtoModel';
import { ApplicationAppModel } from '../../models/entity/application/applicationAppModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { BuilderInfoStatusDtoModel } from '../../models/dto/application/builderInfoStatusDtoModel';
import { UploadApplictionDtoModel } from '../../models/dto/application/uploadApplictionDtoModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ScoreClickInfoModel } from '../../models/dto/application/scoreClickInfoModel';


@Injectable()
export class ApplicationAppService extends ApiCmsServerBase<ApplicationAppModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ApplicationApp';
  }

  ServiceScoreClick(model: ApplicationScoreDtoModel): Observable<ErrorExceptionResultBase> {
    if (model == null) {
      model = new ApplicationScoreDtoModel();
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
  ServiceScoreClickList(model: FilterModel): Observable<ErrorExceptionResult<ScoreClickInfoModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/ScoreClickList', model, {
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

  ServiceCurrentApp(): Observable<ErrorExceptionResult<ApplicationAppModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CurrentApp', {
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


  ServiceBuild(id: number): Observable<ErrorExceptionResult<ApplicationAppModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/build/' + id, {
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

  ServiceBuildInfo(id: number, key: string): Observable<ErrorExceptionResult<ApplicationAppModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/build/' + id + "/" + key, {
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


  ServiceBuildInfoSet(model: BuilderInfoStatusDtoModel): Observable<ErrorExceptionResultBase> {
    if (model == null) {
      model = new BuilderInfoStatusDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/BuildInfo', model, {
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


  ServiceUploadUpdate(model: UploadApplictionDtoModel): Observable<ErrorExceptionResult<ApplicationAppModel>> {
    if (model == null) {
      model = new UploadApplictionDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/UploadUpdate', model, {
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


  ServiceUpload(model: UploadApplictionDtoModel): Observable<ErrorExceptionResult<ApplicationAppModel>> {
    if (model == null) {
      model = new UploadApplictionDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Upload', model, {
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
