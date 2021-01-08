import { Component, OnInit } from '@angular/core';
import {
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
  ngOnInit(): void {}
  onCaptchaOrder(): void {
    this.modelData.CaptchaText = '';
    this.coreAuthService.ServiceCaptcha().subscribe((next) => {
      this.captchaModel = next.Item;
    });
  }
}
