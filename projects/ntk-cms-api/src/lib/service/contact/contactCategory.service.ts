import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ContactCategoryModel } from '../../models/entity/contact/contactCategoryModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class ContactCategoryService extends ApiCmsServerBase<ContactCategoryModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'ContactCategory';
  }

  ServiceMove(OldId: string, NewId: string): Observable<ErrorExceptionResult<ContactCategoryModel>> {
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
