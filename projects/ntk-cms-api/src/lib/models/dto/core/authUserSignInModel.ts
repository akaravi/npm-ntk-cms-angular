import { EnumManageUserAccessTokenTypes } from '../../enums/enumManageUserAccessTokenTypes';

export class AuthUserSignInModel {
  CaptchaKey: string;
  CaptchaText: string;
  Email: string;
  Mobile: string;
  Password: string;
  IsRemember: boolean;
  SiteId: number;
  lang: string;
  UserAccessTokenType: EnumManageUserAccessTokenTypes;

}
