import { Settings } from 'http2';

export class AuthEmailConfirmDtoModel {
  CaptchaKey: string;
  CaptchaText: string;
  LinkUserId: number;
  Mobile: string;
  Code: string;
}
