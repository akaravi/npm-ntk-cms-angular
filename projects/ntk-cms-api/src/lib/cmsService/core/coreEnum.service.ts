import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorExcptionResult } from '../../cmsModels/base/errorExcptionResult';
import { EnumModel } from '../../cmsModels/base/enumModel';
import { ApiServerBase } from '../_base/apiServerBase.service';

export class CoreEnumService extends ApiServerBase {
  getModuleCotrolerUrl(): string {
    return 'CoreEnum';
  }

  ServiceEnumRecordStatus(): Observable<ErrorExcptionResult<EnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EnumRecordStatus', {
        headers: this.getHeaders(),
      })
      .pipe(
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<EnumModel>) => {
          return ret;
        }),
      );
  }

  ServiceEnumLocationType(): Observable<ErrorExcptionResult<EnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EnumLocationType', {
        headers: this.getHeaders(),
      })
      .pipe(
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<EnumModel>) => {
          return ret;
        }),
      );
  }
  ServiceEnumUserLanguage(): Observable<ErrorExcptionResult<EnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EnumUserLanguage', {
        headers: this.getHeaders(),
      })
      .pipe(
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<EnumModel>) => {
          return ret;
        }),
      );
  }
  ////
  // EnumUserLanguage
  ////
  ServiceEnumGender(): Observable<ErrorExcptionResult<EnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EnumGender', {
        headers: this.getHeaders(),
      })
      .pipe(
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<EnumModel>) => {
          return ret;
        }),
      );
  }
  ServiceEnumMenuPlaceType(): Observable<ErrorExcptionResult<EnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EnumMenuPlaceType', {
        headers: this.getHeaders(),
      })
      .pipe(
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<EnumModel>) => {
          return ret;
        }),
      );
  }
}
