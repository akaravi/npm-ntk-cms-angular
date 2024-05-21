import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { BiographyCategoryModel } from '../../models/entity/biography/biographyCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class BiographyCategoryService extends ApiCmsServerBase<BiographyCategoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'BiographyCategory';
  }

  ServiceMove(OldId: number, NewId: number): Observable<ErrorExceptionResult<BiographyCategoryModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/Move',
        { Old: OldId, New: NewId },
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
