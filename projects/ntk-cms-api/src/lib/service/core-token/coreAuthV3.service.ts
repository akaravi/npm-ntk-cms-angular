import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthEmailConfirmDtoModel } from '../../models/dto/core-main/authEmailConfirmDtoModel';
import { AuthMobileConfirmDtoModel } from '../../models/dto/core-main/authMobileConfirmDtoModel';
import { AuthUserChangePasswordModel } from '../../models/dto/core-main/authUserChangePasswordModel';
import { AuthUserForgetPasswordEntryPinCodeModel } from '../../models/dto/core-main/authUserForgetPasswordEntryPinCodeModel';
import { AuthUserForgetPasswordModel } from '../../models/dto/core-main/authUserForgetPasswordModel';
import { AuthUserSignInBySmsDtoModel } from '../../models/dto/core-main/authUserSignInBySmsDtoModel';
import { AuthUserSignInModel } from '../../models/dto/core-main/authUserSignInModel';
import { AuthUserSignUpModel } from '../../models/dto/core-main/authUserSignUpModel';
import { TokenDeviceClientInfoDtoModel } from '../../models/dto/core-main/tokenDeviceClientInfoDtoModel';
import { TokenDeviceSetNotificationIdDtoModel } from '../../models/dto/core-main/tokenDeviceSetNotificationIdDtoModel';
import { CaptchaModel } from '../../models/entity/base/captchaModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { TokenDeviceModel } from '../../models/entity/core-token/tokenDeviceModel';
import { TokenInfoModelV3 } from '../../models/entity/core-token/tokenInfoModelV3';
import { ApiServerBase } from '../base/apiServerBase.service';

import { AuthRefreshTokenModel } from '../../models/dto/core-main/authRefreshTokenModel';
import { ActivateCodeModel } from '../../models/entity/base/activateCodeModel';
import { CoreUserModel } from '../../models/entity/core-main/coreUserModel';
import { TokenJWTModel } from '../../models/entity/core-token/tokenJWTModel';

@Injectable()
export class CoreAuthV3Service extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'auth';
  }
  ServiceSigninUser(model: AuthUserSignInModel): Observable<ErrorExceptionResult<TokenJWTModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/signin', model, { headers: this.getHeaders() }).pipe(
      map((ret: any) => {
        this.setJWT(ret.item);
        return ret;
      }),
    );
  }
  ServiceSigninUserBySMS(model: AuthUserSignInBySmsDtoModel): Observable<ErrorExceptionResult<TokenJWTModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/signInBySms', model, { headers: this.getHeaders() }).pipe(

      map((ret: any) => {
        if (ret.isSuccess) {
          this.setJWT(ret.item);
        }
        return ret;
      }),
    );
  }
  ServiceRefreshToken(model: AuthRefreshTokenModel = new AuthRefreshTokenModel()): Observable<ErrorExceptionResult<TokenJWTModel>> {
    if (model == null) {
      model = new AuthRefreshTokenModel();
    }
    if (!model.refreshToken || model.refreshToken.length == 0) {
      var jwt = this.getJWT();
      if (jwt && jwt.refreshToken && jwt.refreshToken.length > 0) {
        model.refreshToken = jwt.refreshToken;
      }
    }
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/RefreshToken', model, {
      headers: this.getHeaders(),
    })
      .pipe(
        map((ret: any) => {
          this.setJWT(ret.item);
          return ret;
        }),
      );
  }
  ServiceLogout(): Observable<ErrorExceptionResultBase> {
    var model = this.getJWT();
    if (!model || !model.refreshToken || model.refreshToken.length == 0)
      return null;
    return this.http.get(this.getBaseUrl() + this.getModuleControllerUrl() + '/signOut/' + model.refreshToken, {
      headers: this.getHeaders(),
    })
      .pipe(
        map((ret: any) => {
          this.setJWT(null);
          //this.tokenInfoSubject.next(new TokenInfoModelV3());
          return ret;
        }),
      );
  }
  ServiceIsAuthenticated(): Observable<boolean> {
    return this.http.get(this.getBaseUrl() + this.getModuleControllerUrl() + '/IsAuthenticated', { headers: this.getHeaders() }).pipe(
      map((ret: any) => {
        return ret;
      }),
    );
  }
  ServiceCurrentToken(): Observable<ErrorExceptionResult<TokenInfoModelV3>> {
    return this.http.get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CurrentToken', { headers: this.getHeaders() }).pipe(
      map((ret: any) => {
        //this.tokenInfoSubject.next(ret.item);
        return ret;
      }),
    );
  }
  ServiceGetTokenDevice(model: TokenDeviceClientInfoDtoModel): Observable<ErrorExceptionResult<TokenDeviceModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetTokenDevice/', model, { headers: this.getHeaders() }).pipe(
      map((ret: any) => {
        this.setDeviceToken(ret.item.deviceToken);
        // if (!ret.item) {
        //   this.tokenDeviceSubject.next(new TokenDeviceModel());
        // }
        // else {
        //   this.tokenDeviceSubject.next(ret.item);
        // }
        return ret;
      }),
    );
  }
  ServiceCurrentDeviceToken(): Observable<ErrorExceptionResult<TokenDeviceModel>> {
    return this.http.get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CurrentDeviceToken', { headers: this.getHeaders() }).pipe(

      map((ret: any) => {
        this.setDeviceToken(ret.item.deviceToken);
        // if (!ret.item) {
        //   this.tokenDeviceSubject.next(new TokenDeviceModel());
        // }
        // else {
        //   this.tokenDeviceSubject.next(ret.item);
        // }
        return ret;
      }),
    );
  }

  ServiceSetTokenDeviceNotificationId(model: TokenDeviceSetNotificationIdDtoModel): Observable<ErrorExceptionResultBase> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/SetTokenDeviceNotificationId/', model, { headers: this.getHeaders() }).pipe(

      map((ret: any) => {
        return ret;
      }),
    );
  }
  ServiceSignupUser(model: AuthUserSignUpModel): Observable<ErrorExceptionResult<TokenInfoModelV3>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/signup', model, { headers: this.getHeaders() }).pipe(

      map((ret: any) => {
        return ret;
      }),
    );
  }
  ServiceCaptcha(): Observable<ErrorExceptionResult<CaptchaModel>> {
    return this.http.get(this.getBaseUrl() + this.getModuleControllerUrl() + '/captcha', { headers: this.getHeaders() }).pipe(

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

        map((ret: any) => {
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

        map((ret: any) => {
          return ret;
        }),
      );
  }
  ServiceForgetPassword(model: AuthUserForgetPasswordModel): Observable<ErrorExceptionResult<ActivateCodeModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/forgetPassword', model, { headers: this.getHeaders() }).pipe(

      map((ret: any) => {
        return ret;
      }),
    );
  }
  ServiceForgetPasswordEntryPinCode(model: AuthUserForgetPasswordEntryPinCodeModel): Observable<ErrorExceptionResult<CoreUserModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ForgetPasswordEntryPinCode', model, { headers: this.getHeaders() }).pipe(

      map((ret: any) => {
        return ret;
      }),
    );
  }
}
