
import { CoreModuleLogFavoriteModel } from '../../models/entity/core-module-log/coreModuleLogFavoriteModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreModuleFavoriteDtoModel } from '../../models/dto/core-module/coreModuleFavoriteDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class CoreModuleLogFavoriteService extends ApiCmsServerBase<CoreModuleLogFavoriteModel, string>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogFavorite';
  }

  ServiceAddFavorite(model: CoreModuleFavoriteDtoModel): Observable<ErrorExceptionResult<CoreModuleLogFavoriteModel>> {
    if (model == null) {
      model = new CoreModuleFavoriteDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddFavorite', model, {
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
  ServiceRemoveFavorite(model: CoreModuleFavoriteDtoModel): Observable<ErrorExceptionResult<CoreModuleLogFavoriteModel>> {
    if (model == null) {
      model = new CoreModuleFavoriteDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/RemoveFavorite', model, {
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
