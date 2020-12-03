import { ApplicationScoreDtoModel } from '../../models/dto/application/applicationScoreDtoModel';
import { ApplicationAppModel } from '../../models/entity/application/applicationAppModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ErrorExcptionResultBase } from '../../models/entity/base/errorExcptionResultBase';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { BuilderInfoStatusDtoModel } from '../../models/dto/application/builderInfoStatusDtoModel';
import { UploadApplictionDtoModel } from '../../models/dto/application/uploadApplictionDtoModel';


@Injectable()
export class ApplicationAppService extends ApiCmsServerBase<ApplicationAppModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ApplicationApp';
  }

  ServiceScoreClick(model: ApplicationScoreDtoModel): Observable<ErrorExcptionResultBase> {
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
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }


  ServiceCorrentDevice(): Observable<ErrorExcptionResult<ApplicationAppModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CorrentDevice', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<ApplicationAppModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }


  ServiceBuild(id: number): Observable<ErrorExcptionResult<ApplicationAppModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/build/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<ApplicationAppModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceBuildInfo(id: number, key: string): Observable<ErrorExcptionResult<ApplicationAppModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/build/' + id + "/" + key, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<ApplicationAppModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }


  ServiceBuildInfoSet(model: BuilderInfoStatusDtoModel): Observable<ErrorExcptionResultBase> {
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
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }


  ServiceUploadUpdate(model: UploadApplictionDtoModel): Observable<ErrorExcptionResult<ApplicationAppModel>> {
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
        map((ret: ErrorExcptionResult<ApplicationAppModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }


  ServiceUpload(model: UploadApplictionDtoModel): Observable<ErrorExcptionResult<ApplicationAppModel>> {
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
        map((ret: ErrorExcptionResult<ApplicationAppModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }


}
