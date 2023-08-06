import { AuthEmailConfirmDtoModel } from '../../models/dto/core-main/authEmailConfirmDtoModel';
import { AuthMobileConfirmDtoModel } from '../../models/dto/core-main/authMobileConfirmDtoModel';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiServerBase } from '../base/apiServerBase.service';
import { TokenInfoModel } from '../../models/entity/core-token/tokenInfoModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CaptchaModel } from '../../models/entity/base/captchaModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { AuthUserSignInModel } from '../../models/dto/core-main/authUserSignInModel';
import { TokenDeviceClientInfoDtoModel } from '../../models/dto/core-main/tokenDeviceClientInfoDtoModel';
import { AuthUserSignUpModel } from '../../models/dto/core-main/authUserSignUpModel';
import { AuthRenewTokenModel } from '../../models/dto/core-main/authRenewTokenModel';
import { AuthUserChangePasswordModel } from '../../models/dto/core-main/authUserChangePasswordModel';
import { AuthUserSignOutModel } from '../../models/dto/core-main/authUserSignOutModel';
import { AuthUserForgetPasswordModel } from '../../models/dto/core-main/authUserForgetPasswordModel';
import { Injectable } from '@angular/core';
import { AuthUserSignInBySmsDtoModel } from '../../models/dto/core-main/authUserSignInBySmsDtoModel';
import { SET_DEVICE_TOKEN_INFO, SET_TOKEN_INFO } from '../../reducers/ntkCmsApiStore.service';
import { AuthUserForgetPasswordEntryPinCodeModel } from '../../models/dto/core-main/authUserForgetPasswordEntryPinCodeModel';
import { TokenDeviceModel } from '../../models/entity/core-token/tokenDeviceModel';
import { TokenDeviceSetNotificationIdDtoModel } from '../../models/dto/core-main/tokenDeviceSetNotificationIdDtoModel';


@Injectable()
export class CoreAuthService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'auth';
  }
  SetCurrentTokenInfo(model: TokenInfoModel | null): any {
    if (model == null) {
      this.removeToken();
      this.cmsApiStore.setState({ type: SET_TOKEN_INFO, payload: new TokenInfoModel() });
      return;
    }
    if (model.token && model.deviceToken && model.refreshToken) {
      this.setToken(model.token, model.deviceToken, model.refreshToken);
    } else if (model.token && model.deviceToken) {
      this.setToken(model.token, model.deviceToken, '');
    } else if (model.token) {
      this.setToken(model.token, '', '');
    }
    else if (model.deviceToken) {
      this.setToken('', model.deviceToken, '');
    }
    this.cmsApiStore.setState({ type: SET_TOKEN_INFO, payload: model });
  }
  SetCurrentDeviceTokenInfo(model: TokenDeviceModel | null): any {
    if (model == null) {
      this.removeToken();
      this.cmsApiStore.setState({ type: SET_DEVICE_TOKEN_INFO, payload: new TokenDeviceModel() });
      return;
    }
    if (model.deviceToken) {
      this.setDeviceToken(model.deviceToken);
    }
    this.cmsApiStore.setState({ type: SET_DEVICE_TOKEN_INFO, payload: model });
  }

  CurrentTokenInfoRenew(): void {
    this.ServiceCurrentToken().subscribe(
      (next) => {
        this.SetCurrentTokenInfo(next.item);
      },
      (error) => {
      }
    );
  }

  ServiceCurrentToken(): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CurrentToken', { headers: this.getHeaders() }).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        return ret;
      }),
    );
  }
  ServiceCurrentDeviceToken(): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CurrentDeviceToken', { headers: this.getHeaders() }).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        return ret;
      }),
    );
  }
  ServiceCaptcha(): Observable<ErrorExceptionResult<CaptchaModel>> {
    return this.http.get(this.getBaseUrl() + this.getModuleControllerUrl() + '/captcha').pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        return ret;
      }),
    );
  }
  ServiceGetTokenDevice(model: TokenDeviceClientInfoDtoModel): Observable<ErrorExceptionResult<TokenDeviceModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetTokenDevice/', model).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        if (ret.isSuccess) {
          this.setToken('', ret.deviceToken, '');
        }
        return ret;
      }),
    );
  }
  ServiceSetTokenDeviceNotificationId(model: TokenDeviceSetNotificationIdDtoModel): Observable<ErrorExceptionResultBase> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/SetTokenDeviceNotificationId/', model).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        if (ret.isSuccess) {
          this.setToken('', ret.deviceToken, '');
        }
        return ret;
      }),
    );
  }
  ServiceSignupUser(model: AuthUserSignUpModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/signup', model).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        return ret;
      }),
    );
  }

  ServiceSigninUser(model: AuthUserSignInModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/signin', model).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        if (ret.isSuccess) {
          this.SetCurrentTokenInfo(ret.item);
        }
        return ret;
      }),
    );
  }

  ServiceSigninUserBySMS(model: AuthUserSignInBySmsDtoModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/signInBySms', model).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        if (ret.isSuccess) {
          this.SetCurrentTokenInfo(ret.item);
        }
        return ret;
      }),
    );
  }

  ServiceRenewToken(model: AuthRenewTokenModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    if (model == null) {
      model = new AuthRenewTokenModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/renewToken', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          if (ret.isSuccess) {
            this.SetCurrentTokenInfo(ret.item);
          }
          return ret;
        }),
      );
  }
  ServiceChangePassword(model: AuthUserChangePasswordModel): Observable<ErrorExceptionResultBase> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/changePassword', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return ret;
        }),
      );
  }
  ServiceForgetPassword(model: AuthUserForgetPasswordModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/forgetPassword', model).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        return ret;
      }),
    );
  }
  ServiceForgetPasswordEntryPinCode(model: AuthUserForgetPasswordEntryPinCodeModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ForgetPasswordEntryPinCode', model).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        return ret;
      }),
    );
  }
  ServiceLogout(model: AuthUserSignOutModel = new AuthUserSignOutModel()): Observable<ErrorExceptionResultBase> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/signOut', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          this.SetCurrentTokenInfo(null);

          return ret;
        }),
      );
  }

  ServiceExistToken(model: FilterModel): Observable<ErrorExceptionResultBase> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/existToken', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return ret;
        }),
      );
  }
  ServiceMobileConfirm(model: AuthMobileConfirmDtoModel): Observable<ErrorExceptionResultBase> {
    if (model == null) {
      model = new AuthMobileConfirmDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/mobileConfirm', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return ret;
        }),
      );
  }
  ServiceEmailConfirm(model: AuthEmailConfirmDtoModel): Observable<ErrorExceptionResultBase> {
    if (model == null) {
      model = new AuthEmailConfirmDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/emailConfirm', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return ret;
        }),
      );
  }
}
