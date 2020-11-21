import { AuthEmailConfirmDtoModel } from './../../models/dto/core/authEmailConfirmDtoModel';
import { AuthMobileConfirmDtoModel } from './../../models/dto/core/authMobileConfirmDtoModel';
import {  map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiServerBase } from '../base/apiServerBase.service';
import { TokenInfoModel } from '../../models/entity/base/tokenInfoModel';
import { FilterModel } from '../../models/entity/base/filterModel';

import { CaptchaModel } from '../../models/entity/base/captchaModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { ErrorExcptionResultBase } from '../../models/entity/base/errorExcptionResultBase';
import { AuthUserSignInModel } from '../../models/dto/core/authUserSignInModel';

import { TokenDeviceClientInfoDtoModel } from '../../models/dto/core/tokenDeviceClientInfoDtoModel';
import { AuthUserSignUpModel } from '../../models/dto/core/authUserSignUpModel';
import { AuthRenewTokenModel } from '../../models/dto/core/authRenewTokenModel';
import { AuthUserChangePasswordModel } from '../../models/dto/core/authUserChangePasswordModel';
import { AuthUserSignOutModel } from '../../models/dto/core/authUserSignOutModel';
import { AuthUserForgetPasswordModel } from '../../models/dto/core/authUserForgetPasswordModel';
import { CoreUserModel } from '../../models/entity/coreMain/coreUserModel';
import { Injectable } from '@angular/core';
import { AuthUserSignInBySmsDtoModel } from '../../models/dto/core/authUserSignInBySmsDtoModel';

@Injectable()
export class CoreAuthService extends ApiServerBase {
  CorrectTokenInfoBS = new BehaviorSubject<TokenInfoModel>(new TokenInfoModel());
  CorrectTokenInfoBSObs = this.CorrectTokenInfoBS.asObservable();
  userRoles: string[] = [];
  userName = '';
  getModuleCotrolerUrl(): string {
    return 'auth';
  }
  SetCorrectTokenInfo(model: TokenInfoModel | null): any {
    if (model == null) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      return;
    }
    this.setToken(model.Token, model.DeviceToken, model.RefreshToken);
    this.CorrectTokenInfoBS.next(model);
  }
  CorrectTokenInfoBSRenew(): any {
    const token = this.getUserToken();

    // if (!token || token === 'null') {
    //   return;
    // }
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CorrectToken', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<TokenInfoModel>) => {
          if (ret) {
            if (ret.IsSuccess) {
              this.SetCorrectTokenInfo(ret.Item);
            }
            return ret;
          }
        }),
      )
      .toPromise();
  }

  ServiceCaptcha(): Observable<ErrorExcptionResult<CaptchaModel>> {
    return this.http.get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/captcha').pipe(
      // catchError(this.handleError)
      map((ret: ErrorExcptionResult<CaptchaModel>) => {
        return ret;
      }),
    );
  }
  ServiceGetTokenDevice(model: TokenDeviceClientInfoDtoModel): Observable<ErrorExcptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetTokenDevice/', model).pipe(
      // catchError(this.handleError)
      map((ret: ErrorExcptionResult<TokenInfoModel>) => {
        if (ret.IsSuccess) {
          this.SetCorrectTokenInfo(ret.Item);
        }
        return ret;
      }),
    );
  }

  ServiceSignupUser(model: AuthUserSignUpModel): Observable<ErrorExcptionResult<CoreUserModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/signup', model).pipe(
      // catchError(this.handleError)
      map((ret: ErrorExcptionResult<CoreUserModel>) => {
        return ret;
      }),
    );
  }

  ServiceSigninUser(model: AuthUserSignInModel): Observable<ErrorExcptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/signin', model).pipe(
      // catchError(this.handleError)
      map((ret: ErrorExcptionResult<TokenInfoModel>) => {
        if (ret.IsSuccess) {
          this.SetCorrectTokenInfo(ret.Item);
        }
        return ret;
      }),
    );
  }

  ServiceSigninUserBySMS(model: AuthUserSignInBySmsDtoModel): Observable<ErrorExcptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/signInBySms', model).pipe(
      // catchError(this.handleError)
      map((ret: ErrorExcptionResult<TokenInfoModel>) => {
        if (ret.IsSuccess) {
          this.SetCorrectTokenInfo(ret.Item);
        }
        return ret;
      }),
    );
  }

  ServiceRenewToken(model: AuthRenewTokenModel): Observable<ErrorExcptionResult<TokenInfoModel>> {
    if (model == null) {
      model = new AuthRenewTokenModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/renewToken', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<TokenInfoModel>) => {
          if (ret.IsSuccess) {
            this.SetCorrectTokenInfo(ret.Item);
          }
          return ret;
        }),
      );
  }
  ServiceChangePassword(model: AuthUserChangePasswordModel): Observable<ErrorExcptionResult<TokenInfoModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/changePassword', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<TokenInfoModel>) => {
          return ret;
        }),
      );
  }
  ServiceForgetPassword(model: AuthUserForgetPasswordModel): Observable<ErrorExcptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/forgetPassword', model).pipe(
      // catchError(this.handleError)
      map((ret: ErrorExcptionResult<TokenInfoModel>) => {
        return ret;
      }),
    );
  }
  ServiceLogout(model: AuthUserSignOutModel = new AuthUserSignOutModel()): Observable<ErrorExcptionResultBase> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/signOut', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          this.SetCorrectTokenInfo(null);

          return ret;
        }),
      );
  }

  ServiceExistToken(model: FilterModel): Observable<ErrorExcptionResultBase> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/existToken', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          return ret;
        }),
      );
  }
  ServiceMobileConfirm(model: AuthMobileConfirmDtoModel): Observable<ErrorExcptionResultBase> {
    if (model == null) {
      model = new AuthMobileConfirmDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/mobileConfirm', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          return ret;
        }),
      );
  }
  ServiceEmailConfirm(model: AuthEmailConfirmDtoModel): Observable<ErrorExcptionResultBase> {
    if (model == null) {
      model = new AuthEmailConfirmDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/emailConfirm', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          return ret;
        }),
      );
  }
}
