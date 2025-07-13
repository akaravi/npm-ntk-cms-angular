export class AuthRefreshTokenModel {
  refreshToken:string ;
  siteId?: number;
  userId?: number;
  userAccessAdminAllowToAllData?: boolean;
  userAccessAdminAllowToProfessionalData?: boolean;
  lang?: string;
}
