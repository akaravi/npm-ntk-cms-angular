import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { EditStepDtoModel } from '../../models/dto/core-main/editStepDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleModel } from '../../models/entity/core-main/coreModuleModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreModuleService extends ApiCmsServerBase<
  CoreModuleModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'CoreModule';
  }
  ServiceEditStep(
    model: EditStepDtoModel<number>
  ): Observable<ErrorExceptionResultBase> {
    if (!model) {
      model = new EditStepDtoModel<number>();
    }
    return this.http
      .put(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/EditStep',
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
  ServiceAutoAdd(): Observable<ErrorExceptionResult<CoreModuleModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/AutoAdd/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceConfig(
    MoudleClassName: string
  ): Observable<ErrorExceptionResult<CoreModuleModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/Config/',
        MoudleClassName,
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
  ServiceGetOneWithModuleConfig(
    model: FilterModel
  ): Observable<ErrorExceptionResult<CoreModuleModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetOneWithModuleConfig/',
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
  ServiceGetViewModelWithModuleConfig(
    id: number
  ): Observable<ErrorExceptionResult<CoreModuleModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetViewModelWithModuleConfig/' +
          id,
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
  ServiceGetAllModuleName(
    model: FilterModel
  ): Observable<ErrorExceptionResult<CoreModuleModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetAllModuleName/',
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
  ServiceGetAllByCategorySiteId(
    CategorySiteId: number,
    model: FilterModel
  ): Observable<ErrorExceptionResult<CoreModuleModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetAllByCategorySiteId/' +
          CategorySiteId,
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
