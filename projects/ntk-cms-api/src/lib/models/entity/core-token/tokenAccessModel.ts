import { LanguageEnum, ManageUserAccessAreaTypesEnum, ManageUserAccessUserTypesEnum } from "../../enums/base/_export";



export class TokenAccessModel {
    siteId: number;
    userId: number;
    userAccessAdminAllowToAllData: boolean;
    userAccessAdminAllowToProfessionalData: boolean;
    userAccessUserType: ManageUserAccessUserTypesEnum;
    userAccessAreaType: ManageUserAccessAreaTypesEnum;
    userAccessUserTypeTitle: string;
    userAccessAreaTypeTitle: string;
    userLanguage: LanguageEnum;
    language: string;
    direction: string;
}