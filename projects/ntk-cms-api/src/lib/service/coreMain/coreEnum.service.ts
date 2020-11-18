import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { EnumModel } from '../../models/entity/base/enumModel';
import { ApiServerBase } from '../base/apiServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreEnumService extends ApiServerBase {
  getModuleCotrolerUrl(): string {
    return 'CoreEnum';
  }

  ServiceEnumRecordStatus(): Observable<ErrorExcptionResult<EnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/enumRecordStatus', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<EnumModel>) => {
          return ret;
        }),
      );
  }

  ServiceEnumLocationType(): Observable<ErrorExcptionResult<EnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/enumLocationType', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<EnumModel>) => {
          return ret;
        }),
      );
  }
  ServiceEnumUserLanguage(): Observable<ErrorExcptionResult<EnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/enumUserLanguage', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
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
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/enumGender', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<EnumModel>) => {
          return ret;
        }),
      );
  }
  ServiceEnumMenuPlaceType(): Observable<ErrorExcptionResult<EnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/enumMenuPlaceType', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<EnumModel>) => {
          return ret;
        }),
      );
  }
}
