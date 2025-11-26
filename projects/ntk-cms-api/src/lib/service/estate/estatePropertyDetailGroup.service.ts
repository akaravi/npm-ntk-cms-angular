import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { EditStepDtoModel } from '../../models/dto/core-main/editStepDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertyDetailGroupModel } from '../../models/entity/estate/estatePropertyDetailGroupModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstatePropertyDetailGroupService extends ApiCmsServerBase<
  EstatePropertyDetailGroupModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'EstatePropertyDetailGroup';
  }
  ServiceGetAllFastSearch(
    model: FilterModel
  ): Observable<ErrorExceptionResult<EstatePropertyDetailGroupModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetAllFastSearch/',
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
