import { Injectable } from '@angular/core';
import { Observable, map, retry } from 'rxjs';
import { EditStepDtoModel } from '../../models/dto/core-main/editStepDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderSourcePathAliasJsonModel } from '../../models/entity/data-provider/dataProviderSourcePathAliasJsonModel';
import { DataProviderSourcePathModel } from '../../models/entity/data-provider/dataProviderSourcePathModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DataProviderSourcePathService extends ApiCmsServerBase<
  DataProviderSourcePathModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'DataProviderSourcePath';
  }
  ServiceGetOneWithJsonFormatter(
    id: string
  ): Observable<ErrorExceptionResult<DataProviderSourcePathAliasJsonModel>> {
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
  ServiceEditStep(
    model: EditStepDtoModel<string>
  ): Observable<ErrorExceptionResultBase> {
    if (!model) {
      model = new EditStepDtoModel<string>();
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
}
