import { Component, OnInit } from '@angular/core';
import {
  ErrorExceptionResult,
  TokenInfoModel,
  AuthUserSignInModel,
  CaptchaModel,
  CoreAuthService,
} from 'projects/ntk-cms-api/src/public-api';

@Component({
  selector: 'app-api-test',
  templateUrl: './apiTest.component.html',
  styleUrls: ['./apiTest.component.scss'],
})
export class ApiTestComponent implements OnInit {
  constructor(private coreAuthService: CoreAuthService) {
    this.onCaptchaOrder();
  }
  modelData: AuthUserSignInModel = new AuthUserSignInModel();
  captchaModel: CaptchaModel = new CaptchaModel();
  TokenInfoResult = new ErrorExceptionResult<TokenInfoModel>();
  message = '';
  ngOnInit(): void {
    this.TokenInfoResult.IsSuccess = false;
    this.onActionCheckToken();
  }
  onCaptchaOrder(): void {
    this.modelData.CaptchaText = '';
    this.coreAuthService.ServiceCaptcha().subscribe((next) => {
      this.captchaModel = next.Item;
    });
  }
  onActionCheckToken(): void {
    this.coreAuthService.ServiceCurrentToken().subscribe((res) => {
      if (res.IsSuccess) {
        this.message = 'Check Is Success';
        this.TokenInfoResult = res;
      } else {
        this.message = res.ErrorMessage;
      }
    });
  }
  onActionLogin(): void {
    this.modelData.CaptchaKey = this.captchaModel.Key;
    this.coreAuthService.ServiceSigninUser(this.modelData).subscribe((res) => {
      if (res.IsSuccess) {
        this.message = 'Login Is Success';
      } else {
        this.onCaptchaOrder();
        this.message = res.ErrorMessage;
      }
    });
  }
  onActionLogout(): void {
    this.modelData.CaptchaKey = this.captchaModel.Key;
    this.coreAuthService.ServiceLogout(null).subscribe((res) => {
      if (res.IsSuccess) {
        this.message = 'Logout Is Success';
      } else {
        this.message = res.ErrorMessage;
      }
    });
  }
}
