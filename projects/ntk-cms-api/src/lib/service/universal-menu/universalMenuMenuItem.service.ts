import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


import { Injectable } from '@angular/core';
import { EditStepDtoModel } from '../../models/dto/core-main/editStepDtoModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { UniversalMenuMenuItemModel } from '../../models/entity/universal-menu/universalMenuMenuItemModel';


@Injectable()
export class UniversalMenuMenuItemService extends ApiCmsServerBase<UniversalMenuMenuItemModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'UniversalMenuMenuItem';
  }
  ServiceGetAllMenu(model: FilterModel): Observable<ErrorExceptionResult<UniversalMenuMenuItemModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    model.rowPerPage = 200;
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllMenu', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          // if (ret.item != null) {
          //   this.coreCpMainMenu.next(ret.listItems);
          // }
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEditStep(model: EditStepDtoModel<number>): Observable<ErrorExceptionResultBase> {
    if (!model) {
      model = new EditStepDtoModel<number>();
    }
    return this.http
      .put(this.getBaseUrl() + this.getModuleControllerUrl() + '/EditStep', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
}
