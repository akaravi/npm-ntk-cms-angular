
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription, throwError } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { NtkCmsApiStoreService } from '../../reducers/ntkCmsApiStore.service';


@Injectable()
export class ApiServerBase {
  public baseUrl = 'https://apicms.ir/api/v1/';
  public userToken = '';
  public deviceToken = '';
  public configApiRetry = 1;
  keyUserToken = 'userToken';
  keyDeviceToken = 'deviceToken';
  setConfig(url: string, apiRetry = 1): void {
    this.baseUrl = url;
    localStorage.setItem('baseUrl', url);
    this.configApiRetry = apiRetry;
  }
  constructor(public http: HttpClient, public cmsApiStore: NtkCmsApiStoreService) {
    this.childConstructor();
  }

  childConstructor(): any {
    // test
  }
  getBaseUrl(): string {
    const BaseUrl = localStorage.getItem('baseUrl');
    if (BaseUrl && BaseUrl.length > 0) {
      return BaseUrl;
    }
    return this.baseUrl;
  }
  getModuleCotrolerUrl(): string {
    return 'Empty';
  }
  getHeaders(): any {
    const headers = { Authorization: this.getUserToken(), DeviceToken: this.getDeviceToken() };

    return headers;
  }

  getUserToken(): string | null {
    if (this.userToken && this.userToken.length > 0) { return this.userToken; }
    const token = localStorage.getItem(this.keyUserToken);
    if (token && token.length > 0) {
      return token;
    }
    const title = 'تایید توکن';
    const message = 'لطفا مجددا وارد حساب کاربری خود شوید';

    return '';
  }
  getDeviceToken(): string | null {
    if (this.deviceToken && this.deviceToken.length > 0) { return this.deviceToken; }
    const token = localStorage.getItem(this.keyDeviceToken);
    if (token && token.length > 0) {
      return token;
    }
    return '';
  }
  setToken(userToken: string, deviceToken: string, refreshToken: string): void {
    if (userToken.length === 0 && deviceToken.length === 0) {
      localStorage.removeItem(this.keyUserToken);
      localStorage.removeItem(this.keyDeviceToken);
      return;
    }
    localStorage.setItem(this.keyUserToken, userToken);
    if (deviceToken && deviceToken.length > 0) {
      localStorage.setItem(this.keyDeviceToken, deviceToken);
    }
    // localStorage.setItem('refreshToken', refreshToken);
  }
  removeToken(): void {
    localStorage.removeItem(this.keyUserToken);
    localStorage.removeItem(this.keyDeviceToken);
  }
  errorExceptionResultCheck(model: ErrorExceptionResult<any> | any): ErrorExceptionResult<any> {
    if (model) {
      if (!model.IsSuccess) {
        const title = 'خطا در دریافت اطلاعات از سرور';
        const message = model.ErrorMessage;
      }
    }
    return model;
  }
  errorExceptionResultBaseCheck(model: ErrorExceptionResultBase | any): ErrorExceptionResultBase {
    if (model) {
      if (!model.IsSuccess) {
        const title = 'خطا در دریافت اطلاعات از سرور';
        const message = model.ErrorMessage;
      }
    }
    // this.loadingStatus=false;
    return model;
  }
  handleError(error: any, caught: Observable<any>): Observable<any> {
    let errorMessage = error.message;
    if (error && error.status) {
      // server-side error
      errorMessage = `Cms Error Code: ${error.status}\nMessage: ${error.message}`;
      if (error.status === 401 || error.status === '401') {
        const title = 'خطای امنیتی';
        const message = 'لطفا مجدد وارد سیستم شود';
      }
    } else if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Cms Error: ${error.error.message}`;
    }

    return throwError(errorMessage);
  }
}
