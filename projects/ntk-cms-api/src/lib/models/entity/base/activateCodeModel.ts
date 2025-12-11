import { UserActivateTypesEnum } from "../../enums/base/userActivateTypesEnum";

export class ActivateCodeModel {
    activateShortCode: string;
    activateCode: string;
    activateType: UserActivateTypesEnum;
    email: string;
    mobile: string;
}
