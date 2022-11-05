export class AuthEmailConfirmDtoModel {
  captchaKey: string;
  captchaText: string;
  linkUserId: number;
  email: string;
  code: string;
}
