import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthEmailConfirmDtoModel } from '../../models/dto/core-main/authEmailConfirmDtoModel';
import { AuthMobileConfirmDtoModel } from '../../models/dto/core-main/authMobileConfirmDtoModel';
import { AuthRenewTokenModel } from '../../models/dto/core-main/authRenewTokenModel';
import { AuthUserChangePasswordModel } from '../../models/dto/core-main/authUserChangePasswordModel';
import { AuthUserForgetPasswordEntryPinCodeModel } from '../../models/dto/core-main/authUserForgetPasswordEntryPinCodeModel';
import { AuthUserForgetPasswordModel } from '../../models/dto/core-main/authUserForgetPasswordModel';
import { AuthUserSignInBySmsDtoModel } from '../../models/dto/core-main/authUserSignInBySmsDtoModel';
import { AuthUserSignInModel } from '../../models/dto/core-main/authUserSignInModel';
import { AuthUserSignOutModel } from '../../models/dto/core-main/authUserSignOutModel';
import { AuthUserSignUpModel } from '../../models/dto/core-main/authUserSignUpModel';
import { TokenDeviceClientInfoDtoModel } from '../../models/dto/core-main/tokenDeviceClientInfoDtoModel';
import { TokenDeviceSetNotificationIdDtoModel } from '../../models/dto/core-main/tokenDeviceSetNotificationIdDtoModel';
import { CaptchaModel } from '../../models/entity/base/captchaModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { TokenDeviceModel } from '../../models/entity/core-token/tokenDeviceModel';
import { TokenInfoModelV3 } from '../../models/entity/core-token/tokenInfoModelV3';
import { ApiServerBase } from '../base/apiServerBase.service';

import { AuthRefreshTokenModel } from '../../models/dto/core-main/authRefreshTokenModel';
import { TokenJWTModel } from '../../models/entity/core-token/tokenJWTModel';


@Injectable()
export class CoreAuthV3Service extends ApiServerBase {
  public tokenInfoSubject: BehaviorSubject<TokenInfoModelV3> = new BehaviorSubject(new TokenInfoModelV3);
  public tokenDeviceSubject: BehaviorSubject<TokenDeviceModel> = new BehaviorSubject(new TokenDeviceModel);
  getModuleControllerUrl(): string {
    return 'auth';
  }
  ServiceSigninUser(model: AuthUserSignInModel): Observable<TokenJWTModel> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/signin', model).pipe(
      map((ret: any) => {
        this.setJWT(ret);
        return ret;
      }),
    );
  }
  ServiceRefreshToken(model: AuthRefreshTokenModel = new AuthRefreshTokenModel()): Observable<ErrorExceptionResult<TokenInfoModelV3>> {
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
          this.setJWT(ret);
          return ret;
        }),
      );
  }
  ServiceLogout(): Observable<ErrorExceptionResultBase> {
    var model = this.getJWT();
    if (!model || !model.refreshToken || model.refreshToken.length == 0)
      return;
    return this.http.get(this.getBaseUrl() + this.getModuleControllerUrl() + '/signOut/' + model.refreshToken, {
      headers: this.getHeaders(),
    })
      .pipe(
        map((ret: any) => {
          this.setJWT(null);
          this.tokenInfoSubject.next(new TokenInfoModelV3());
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
        this.tokenInfoSubject.next(ret.item);
        return ret;
      }),
    );
  }
  ServiceGetTokenDevice(model: TokenDeviceClientInfoDtoModel): Observable<ErrorExceptionResult<TokenDeviceModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetTokenDevice/', model).pipe(
      map((ret: any) => {
        this.setDeviceToken(ret.item.deviceToken);
        if (!ret.item) {
          this.tokenDeviceSubject.next(new TokenDeviceModel());
        }
        else {
          this.tokenDeviceSubject.next(ret.item);
        }
        return ret;
      }),
    );
  }
  ServiceCurrentDeviceToken(): Observable<ErrorExceptionResult<TokenDeviceModel>> {
    return this.http.get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CurrentDeviceToken', { headers: this.getHeaders() }).pipe(

      map((ret: any) => {
        this.setDeviceToken(ret.item.deviceToken);
        if (!ret.item) {
          this.tokenDeviceSubject.next(new TokenDeviceModel());
        }
        else {
          this.tokenDeviceSubject.next(ret.item);
        }
        return ret;
      }),
    );
  }
}
