export class TokenDeviceModel {
  linkSiteId: number;
  linkDeviceId: number;
  linkApplicationId: number;
  rememberOnDevice: boolean;
  currentSiteDomainUrl: string;
  deviceToken: string;
  tokenExpireDate: Date;
}
