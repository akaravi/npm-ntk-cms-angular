import { EnumManageUserAccessTokenTypes } from '../../enums/enumManageUserAccessTokenTypes';

export class AuthUserSignInBySmsDtoModel {
  CaptchaKey: string;
  CaptchaText: string;
  Mobile: string;
  Code: string;
  IsRemember: boolean;
  SiteId: number;
  lang: string;
  UserAccessTokenType: EnumManageUserAccessTokenTypes;
}
