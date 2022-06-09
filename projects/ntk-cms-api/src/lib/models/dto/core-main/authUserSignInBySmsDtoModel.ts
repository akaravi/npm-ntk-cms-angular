export class AuthUserSignInBySmsDtoModel {
  captchaKey: string;
  captchaText: string;
  mobile: string;
  code: string;
  isRemember: boolean;
  siteId: number;
  lang: string;
  resellerSiteId?: number;
  resellerUserId?: number;
}
