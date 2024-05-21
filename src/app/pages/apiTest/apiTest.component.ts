import { Component, OnInit } from '@angular/core';
import {
  AuthUserSignInModel,
  CaptchaModel,
  CoreAuthService,
  ErrorExceptionResult,
  TokenInfoModel,
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
    this.TokenInfoResult.isSuccess = false;
    this.onActionCheckToken();
  }
  onCaptchaOrder(): void {
    this.modelData.captchaText = '';
    this.coreAuthService.ServiceCaptcha().subscribe((next) => {
      this.captchaModel = next.item;
    });
  }
  onActionCheckToken(): void {
    this.coreAuthService.ServiceCurrentToken().subscribe((res) => {
      if (res.isSuccess) {
        this.message = 'Check Is Success';
        this.TokenInfoResult = res;
      } else {
        this.message = res.errorMessage;
      }
    });
  }
  onActionLogin(): void {
    this.modelData.captchaKey = this.captchaModel.key;
    this.coreAuthService.ServiceSigninUser(this.modelData).subscribe((res) => {
      if (res.isSuccess) {
        this.message = 'Login Is Success';
      } else {
        this.onCaptchaOrder();
        this.message = res.errorMessage;
      }
    });
  }
  onActionLogout(): void {
    this.modelData.captchaKey = this.captchaModel.key;
    this.coreAuthService.ServiceLogout(null).subscribe((res) => {
      if (res.isSuccess) {
        this.message = 'Logout Is Success';
      } else {
        this.message = res.errorMessage;
      }
    });
  }
}
