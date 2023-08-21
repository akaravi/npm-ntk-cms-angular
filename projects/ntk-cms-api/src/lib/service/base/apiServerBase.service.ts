import { I } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subscription, throwError } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { ErrorExceptionResultExportFile } from '../../models/entity/base/errorExceptionResultExportFile';
import { ManageUserAccessDataTypesEnum } from '../../models/enums/base/manageUserAccessDataTypesEnum';
import { NtkCmsApiStoreService } from '../../reducers/ntkCmsApiStore.service';


@Injectable()
export class ApiServerBase {
  constructor(@Inject(HttpClient) public http: HttpClient, public cmsApiStore: NtkCmsApiStoreService) {
    this.childConstructor();
    this.headers = new Map<string, string>();
  }
  public baseUrl = 'https://apicms.ir/api/v2/';
  public userToken = '';
  public deviceToken = '';
  public configApiRetry = 0;
  keyUserToken = 'userToken';
  keyDeviceToken = 'deviceToken';
  keyBaseUrl = 'baseUrl';
  private headers: Map<string, string>;
  private accessLoad = false;
  private accessDataType: ManageUserAccessDataTypesEnum;
  setConfig(url: string, apiRetry = 1): void {
    this.baseUrl = url;
    localStorage.setItem(this.keyBaseUrl, url);
    this.configApiRetry = apiRetry;
  }
  cachApiResult = [];
  cashApiIsValid(serviceNameKay: string, cashApiSeconds?: number): boolean {
    if (cashApiSeconds > 0) {
      if (!this.cachApiResult[serviceNameKay])
        return false;
      if (!this.cachApiResult[serviceNameKay].isSuccess)
        return false;
      if (this.cachApiResult[serviceNameKay].dateResult && (new Date().getTime() - this.cachApiResult[serviceNameKay].dateResult) < cashApiSeconds)
        return true;
    }
    return false;
  }
  childConstructor(): any {
    // test
  }
  getBaseUrl(): string {
    const BaseUrl = localStorage.getItem(this.keyBaseUrl);
    if (BaseUrl && BaseUrl.length > 0) {
      return BaseUrl;
    }
    return this.baseUrl;
  }
  getModuleControllerUrl(): string {
    return 'Empty';
  }

  setHeaders(key: string, value: string): void {
    this.headers.set(key, value);
  }
  setAccessLoad(status: boolean = true): void {
    this.accessLoad = status;
  }
  setAccessDataType(status: ManageUserAccessDataTypesEnum): void {
    this.accessDataType = status;
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
    if ((!userToken || userToken.length === 0) && (!deviceToken || deviceToken.length === 0)) {
      localStorage.removeItem(this.keyUserToken);
      localStorage.removeItem(this.keyDeviceToken);
      return;
    }
    localStorage.setItem(this.keyUserToken, userToken);
    if (deviceToken && deviceToken.length > 0) {
      localStorage.setItem(this.keyDeviceToken, deviceToken);
    }
  }
  setDeviceToken(deviceToken: string): void {
    if (!deviceToken || deviceToken.length === 0) {
      localStorage.removeItem(this.keyDeviceToken);
      return;
    }
    localStorage.setItem(this.keyDeviceToken, deviceToken);
  }
  removeToken(): void {
    localStorage.removeItem(this.keyUserToken);
    localStorage.removeItem(this.keyDeviceToken);
  }
  getHeaders(): any {
    /*Authorization*/
    if (this.getUserToken() && this.getUserToken().length > 1) {
      this.headers.set('Authorization', this.getUserToken());
    } else if (this.headers.has('Authorization')) {
      this.headers.delete('Authorization');
    }
    /*DeviceToken*/
    if (this.getDeviceToken() && this.getDeviceToken().length > 1) {
      this.headers.set('DeviceToken', this.getDeviceToken());
    } else if (this.headers.has('DeviceToken')) {
      this.headers.delete('DeviceToken');
    }
    /*AccessLoad*/
    if (this.accessLoad) {
      this.headers.set('AccessLoad', 'true');
    }
    else if (this.headers.has('AccessLoad')) {
      this.headers.delete('AccessLoad');
    }
    /*AccessDataType*/
    if (this.accessDataType) {
      this.headers.set('AccessDataType', this.accessDataType.toString());
    }
    else if (this.headers.has('AccessDataType')) {
      this.headers.delete('AccessDataType');
    }
    const retOut = Object.create(null);
    for (const [k, v] of this.headers) {
      retOut[k] = v; // look out! Key must be a string!
    }
    return retOut;
  }

  errorExceptionResultCheck<TModel>(model: ErrorExceptionResult<TModel>): ErrorExceptionResult<TModel> {
    if (model) {
      if (!model.isSuccess) {
        const title = 'خطا در دریافت اطلاعات از سرور';
        const message = model.errorMessage;
      }
    }
    return model;
  }
  errorExceptionResultBaseCheck(model: ErrorExceptionResultBase): ErrorExceptionResultBase {
    if (model) {
      if (!model.isSuccess) {
        const title = 'خطا در دریافت اطلاعات از سرور';
        const message = model.errorMessage;
      }
    }
    // this.loadingStatus=false;
    return model;
  }
  errorExceptionResultCheckExportFile(model: ErrorExceptionResultExportFile): ErrorExceptionResultExportFile {
    if (model) {
      if (!model.isSuccess) {
        const title = 'خطا در دریافت اطلاعات از سرور';
        const message = model.errorMessage;
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
