import { AuthEmailConfirmDtoModel } from './../../models/dto/core/authEmailConfirmDtoModel';
import { AuthMobileConfirmDtoModel } from './../../models/dto/core/authMobileConfirmDtoModel';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiServerBase } from '../base/apiServerBase.service';
import { TokenInfoModel } from '../../models/entity/base/tokenInfoModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CaptchaModel } from '../../models/entity/base/captchaModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { AuthUserSignInModel } from '../../models/dto/core/authUserSignInModel';
import { TokenDeviceClientInfoDtoModel } from '../../models/dto/core/tokenDeviceClientInfoDtoModel';
import { AuthUserSignUpModel } from '../../models/dto/core/authUserSignUpModel';
import { AuthRenewTokenModel } from '../../models/dto/core/authRenewTokenModel';
import { AuthUserChangePasswordModel } from '../../models/dto/core/authUserChangePasswordModel';
import { AuthUserSignOutModel } from '../../models/dto/core/authUserSignOutModel';
import { AuthUserForgetPasswordModel } from '../../models/dto/core/authUserForgetPasswordModel';
import { Injectable } from '@angular/core';
import { AuthUserSignInBySmsDtoModel } from '../../models/dto/core/authUserSignInBySmsDtoModel';
import { SET_TOKEN_INFO } from '../base/_export';

@Injectable()
export class CoreAuthService extends ApiServerBase {
  // CurrentTokenInfoBS = new BehaviorSubject<TokenInfoModel>(new TokenInfoModel());
  // CurrentTokenInfoBSObs = this.CurrentTokenInfoBS.asObservable();
  userRoles: string[] = [];
  userName = '';

  getModuleCotrolerUrl(): string {
    return 'auth';
  }
  SetCurrentTokenInfo(model: TokenInfoModel | null): any {
    if (model == null) {
      localStorage.removeItem(this.keyUserToken);
      // localStorage.removeItem('refreshToken');
      //this.CurrentTokenInfoBS.next(new TokenInfoModel());
      this.cmsApiStore.dispatch({ type: SET_TOKEN_INFO, payload: new TokenInfoModel() });

      return;
    }
    this.setToken(model.Token, model.DeviceToken, model.RefreshToken);
    //this.CurrentTokenInfoBS.next(model);
    this.cmsApiStore.dispatch({ type: SET_TOKEN_INFO, payload: model });
  }
  CurrentTokenInfoRenew(): any {
    const token = this.getUserToken();
    // if (!token || token === 'null') {
    //   return;
    // }
    this.ServiceCurrentToken().subscribe(
      (next) => {
        this.SetCurrentTokenInfo(next.Item);
      },
      (error) => {
      }
    );

  }

  ServiceCurrentToken(): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CurrentToken', { headers: this.getHeaders() }).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        return ret;
      }),
    );
  }

  ServiceCaptcha(): Observable<ErrorExceptionResult<CaptchaModel>> {
    return this.http.get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/captcha').pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        return ret;
      }),
    );
  }
  ServiceGetTokenDevice(model: TokenDeviceClientInfoDtoModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetTokenDevice/', model).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        if (ret.IsSuccess) {
          this.SetCurrentTokenInfo(ret.Item);
        }
        return ret;
      }),
    );
  }

  ServiceSignupUser(model: AuthUserSignUpModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/signup', model).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        return ret;
      }),
    );
  }

  ServiceSigninUser(model: AuthUserSignInModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/signin', model).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        if (ret.IsSuccess) {
          this.SetCurrentTokenInfo(ret.Item);
        }
        return ret;
      }),
    );
  }

  ServiceSigninUserBySMS(model: AuthUserSignInBySmsDtoModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/signInBySms', model).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        if (ret.IsSuccess) {
          this.SetCurrentTokenInfo(ret.Item);
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
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/renewToken', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          if (ret.IsSuccess) {
            this.SetCurrentTokenInfo(ret.Item);
          }
          return ret;
        }),
      );
  }
  ServiceChangePassword(model: AuthUserChangePasswordModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/changePassword', model, {
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
    return this.http.post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/forgetPassword', model).pipe(
      // catchError(this.handleError)
      map((ret: any) => {
        return ret;
      }),
    );
  }
  ServiceLogout(model: AuthUserSignOutModel = new AuthUserSignOutModel()): Observable<ErrorExceptionResultBase> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/signOut', model, {
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
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/existToken', model, {
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
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/mobileConfirm', model, {
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
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/emailConfirm', model, {
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
