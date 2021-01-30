import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from 'ntk-cms-api';

export class BaseService {
  deviceToken = '';
  userToken = '';
  keyUserToken = 'userToken';
  keyDeviceToken = 'deviceToken';

  getHeaders(): any {
    const headers = { Authorization: this.getUserToken(), DeviceToken: this.getDeviceToken() };

    return headers;
  }

  getUserToken(): string | null {
    if (this.userToken && this.userToken.length > 0) {
      return this.userToken;
    }
    const token = localStorage.getItem(this.keyUserToken);
    if (token && token.length > 0) {
      return token;
    }
    const title = 'تایید توکن';
    const message = 'لطفا مجددا وارد حساب کاربری خود شوید';

    return '';
  }
  getDeviceToken(): string | null {
    if (this.deviceToken && this.deviceToken.length > 0) {
      return this.deviceToken;
    }
    const token = localStorage.getItem(this.keyDeviceToken);
    if (token && token.length > 0) {
      return token;
    }
    return '';
  }
  errorExceptionResultCheck<TOut>(model: ErrorExceptionResult<TOut> | any): ErrorExceptionResult<TOut> {
    if (model) {
      if (!model.IsSuccess) {
        const title = 'خطا در دریافت اطلاعات از سرور';
        const message = model.ErrorMessage;
      }
    }
    return model;
  }
  // private sideEffectHelper_(
  //   name: string,
  //   parameters: HttpParams,
  //   httpMethod: string,
  //   apiURL: string,
  //   successMethod = (a: any) => this.actionSuccess(a),
  //   failMethod = (a: any, b: any) => this.actionFailed(a, b),
  // ): void {
  //   this.ntkSmartModalService.getModal('waitModal').open();

  //   this.reachServer(httpMethod, apiURL, parameters).subscribe(
  //     (a) => successMethod(a),
  //     (err) => failMethod(name, err),
  //   );
  // }

  // private reachServer_(method: string, apiUrl: string, parameters: HttpParams, data: any = {}): Observable<any> | null {
  //   switch (method.toLowerCase()) {
  //     case 'get':
  //       return this.http.get(this.tree.config.baseURL + apiUrl, { params: parameters });
  //     case 'post':
  //       return this.http.post(this.tree.config.baseURL + apiUrl, data, { params: parameters });
  //     case 'delete':
  //       return this.http.delete(this.tree.config.baseURL + apiUrl, { params: parameters });
  //     case 'download':
  //       window.open(this.tree.config.baseURL + apiUrl + '?path=' + parameters.get('path'), '_blank');
  //       return null;
  //     default:
  //       console.warn('[NodeClickedService] Incorrect params for this side-effect');
  //       return null;
  //   }
  // }
}
