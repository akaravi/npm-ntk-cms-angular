import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { EditStepDtoModel } from '../../models/dto/core-main/editStepDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreCpMainMenuModel } from '../../models/entity/core-main/coreCpMainMenuModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreCpMainMenuService extends ApiCmsServerBase<
  CoreCpMainMenuModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'CoreCpMainMenu';
  }
  ServiceGetAllTree(
    model: FilterModel
  ): Observable<ErrorExceptionResult<CoreCpMainMenuModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    model.rowPerPage = 200;
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllTree',
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
  ServiceGetAllMenu(
    model: FilterModel
  ): Observable<ErrorExceptionResult<CoreCpMainMenuModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    model.rowPerPage = 200;
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllMenu',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          // if (ret.item != null) {
          //   this.coreCpMainMenu.next(ret.listItems);
          // }
          return ret;
        })
      );
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
}
