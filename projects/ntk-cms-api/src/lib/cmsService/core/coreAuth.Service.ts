import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiServerBase } from '../_base/apiServerBase.service';
import { TokenInfoModel } from '../../cmsModels/base/tokenInfoModel';
import { FilterModel } from '../../cmsModels/base/filterModel';

import { CaptchaModel } from '../../cmsModels/base/captchaModel';
import { ErrorExcptionResult } from '../../cmsModels/base/errorExcptionResult';
import { ErrorExcptionResultBase } from '../../cmsModels/base/errorExcptionResultBase';
import { AuthUserSignInModel } from '../../cmsModels/core/authModel';
import { AuthRenewTokenModel } from '../../cmsModels/core/authRenewTokenModel';
import { AuthUserChangePasswordModel } from '../../cmsModels/core/authUserChangePasswordModel';
import { AuthUserForgetPasswordModel } from '../../cmsModels/core/authUserForgetPasswordModel';
import { AuthUserSignOutModel } from '../../cmsModels/core/authUserSignOutModel';
import { AuthUserSignUpModel } from '../../cmsModels/core/authUserSignUpModel';
import { TokenDeviceClientInfoDtoModel } from '../../cmsDtoModels/core/tokenDeviceClientInfoDtoModel';
import { CoreUserModel as CoreUserModel } from '../../cmsModels/core/coreUserModel';

export class CoreAuthService extends ApiServerBase {
  CorrectTokenInfoBS = new BehaviorSubject<TokenInfoModel>(new TokenInfoModel());
  CorrectTokenInfoBSObs = this.CorrectTokenInfoBS.asObservable();

  getModuleCotrolerUrl(): string {
    return 'auth';
  }
  userRoles: string[] = [];
  userName = '';

  SetCorrectTokenInfo(model: TokenInfoModel | null): any {
    if (model == null) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      return;
    }
    this.setToken(model.Token,model.DeviceToken,model.RefreshToken)
    
    this.CorrectTokenInfoBS.next(model);
  }
  CorrectTokenInfoBSRenew(): any {
    const token = this.getUserToken();

    if (!token || token === 'null') {
      return;
    }
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CorrectToken', {
        headers: this.getHeaders(),
      })
      .pipe(
        catchError(this.handleError),
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
      catchError(this.handleError),
      map((ret: ErrorExcptionResult<CaptchaModel>) => {
        return ret;
      }),
    );
  }
  ServiceGetTokenDevice(model: TokenDeviceClientInfoDtoModel): Observable<ErrorExcptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetTokenDevice/', model).pipe(
      catchError(this.handleError),
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
      catchError(this.handleError),
      map((ret: ErrorExcptionResult<CoreUserModel>) => {
        return ret;
      }),
    );
  }

  ServiceSigninUser(model: AuthUserSignInModel): Observable<ErrorExcptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/signin', model).pipe(
      catchError(this.handleError),
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
        catchError(this.handleError),
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
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<TokenInfoModel>) => {
          return ret;
        }),
      );
  }
  ServiceForgetPassword(model: AuthUserForgetPasswordModel): Observable<ErrorExcptionResult<TokenInfoModel>> {
    return this.http.post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/forgetPassword', model).pipe(
      catchError(this.handleError),
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
        catchError(this.handleError),
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
        catchError(this.handleError),
        map((ret: ErrorExcptionResultBase) => {
          return ret;
        }),
      );
  }
}
