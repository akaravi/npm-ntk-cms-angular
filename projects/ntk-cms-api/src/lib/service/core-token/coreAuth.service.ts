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
import { TokenInfoModel } from '../../models/entity/core-token/tokenInfoModel';
import { ApiServerBase } from '../base/apiServerBase.service';


@Injectable()
export class CoreAuthService extends ApiServerBase {
  public tokenInfoSubject: BehaviorSubject<TokenInfoModel> = new BehaviorSubject(new TokenInfoModel);
  public tokenDeviceSubject: BehaviorSubject<TokenDeviceModel> = new BehaviorSubject(new TokenDeviceModel);
  getModuleControllerUrl(): string {
    return 'auth';
  }
  SetCurrentTokenInfo(model: TokenInfoModel | null): any {
    if (model == null) {
      this.removeToken();
      this.tokenInfoSubject.next(new TokenInfoModel());
      return;
    }
    if (model.deviceToken) {
      this.setDeviceToken( model.deviceToken);
    } 
    if (model.token) {
      this.setToken(model.token, model.refreshToken);
    }
    this.tokenInfoSubject.next(model);
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

      map((ret: any) => {
        this.setToken(ret.item.token, ret.item.deviceToken);
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
  ServiceCaptcha(): Observable<ErrorExceptionResult<CaptchaModel>> {
    return this.http.get(this.getBaseUrl() + this.getModuleControllerUrl() + '/captcha').pipe(

      map((ret: any) => {
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
  ServiceSetTokenDeviceNotificationId(model: TokenDeviceSetNotificationIdDtoModel): Observable<ErrorExceptionResultBase> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/SetTokenDeviceNotificationId/', model).pipe(

      map((ret: any) => {
        return ret;
      }),
    );
  }
  ServiceSignupUser(model: AuthUserSignUpModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/signup', model).pipe(

      map((ret: any) => {
        return ret;
      }),
    );
  }

  ServiceSigninUser(model: AuthUserSignInModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/signin', model).pipe(

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

        map((ret: any) => {
          return ret;
        }),
      );
  }
  ServiceForgetPassword(model: AuthUserForgetPasswordModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/forgetPassword', model).pipe(

      map((ret: any) => {
        return ret;
      }),
    );
  }
  ServiceForgetPasswordEntryPinCode(model: AuthUserForgetPasswordEntryPinCodeModel): Observable<ErrorExceptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ForgetPasswordEntryPinCode', model).pipe(

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
}
