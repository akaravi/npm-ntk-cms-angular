import { ManageUserAccessAreaTypesEnum, ManageUserAccessUserTypesEnum } from "projects/ntk-cms-api/src/public-api";


export class TokenAccessModel {
    siteId: number;
    userId: number;
    userAccessAdminAllowToAllData: boolean;
    userAccessAdminAllowToProfessionalData: boolean
    userAccessUserType: ManageUserAccessUserTypesEnum
    userAccessAreaType: ManageUserAccessAreaTypesEnum
    userAccessUserTypeTitle: string;
    userAccessAreaTypeTitle: string;
}