import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderSourcePublicConfigAliasJsonModel } from '../../models/entity/data-provider/dataProviderSourcePublicConfigAliasJsonModel';
import { DataProviderSourcePublicConfigModel } from '../../models/entity/data-provider/dataProviderSourcePublicConfigModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DataProviderSourcePublicConfigService extends ApiCmsServerBase<
  DataProviderSourcePublicConfigModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'DataProviderSourcePublicConfig';
  }

  /**
   * دریافت یک رکورد با فرمت JSON
   * @param id شناسه رکورد
   * @returns نتیجه عملیات با فرمت JSON
   */
  ServiceGetOneWithJsonFormatter(
    id: string
  ): Observable<
    ErrorExceptionResult<DataProviderSourcePublicConfigAliasJsonModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetOneWithJsonFormatter/' +
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

  /**
   * افزودن خودکار کلاس‌های ProcessMessage از namespace DataProvider.ProcessMessage
   * @returns نتیجه عملیات افزودن
   */
  ServiceAutoAdd(): Observable<
    ErrorExceptionResult<DataProviderSourcePublicConfigModel>
  > {
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
}

