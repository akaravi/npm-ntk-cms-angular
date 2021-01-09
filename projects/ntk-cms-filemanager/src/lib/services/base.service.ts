import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from 'ntk-cms-api';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
  deviceToken = '';
  userToken = '';
    constructor() {}
    getHeaders(): any {
        const headers = { Authorization: this.getUserToken(), DeviceToken: this.getDeviceToken() };

        return headers;
    }

    getUserToken(): string | null {
        if (this.userToken && this.userToken.length > 0) { return this.userToken; }
        const token = localStorage.getItem('userToken');
        if (token && token.length > 0) {
            return token;
        }
        const title = 'تایید توکن';
        const message = 'لطفا مجددا وارد حساب کاربری خود شوید';

        return '';
    }
    getDeviceToken(): string | null {
        if (this.deviceToken && this.deviceToken.length > 0) { return this.deviceToken; }
        const token = localStorage.getItem('deviceToken');
        if (token && token.length > 0) {
            return token;
        }
        return '';
    }
    errorExceptionResultCheck<TOut>(model: ErrorExceptionResult<TOut>|any): ErrorExceptionResult<TOut> {
      if (model) {
        if (!model.IsSuccess) {
          const title = 'خطا در دریافت اطلاعات از سرور';
          const message = model.ErrorMessage;
        }
      }
      return model;
    }
}
