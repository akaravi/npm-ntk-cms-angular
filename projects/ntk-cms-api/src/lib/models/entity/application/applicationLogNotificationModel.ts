import { EnumNotificationType } from '../../enums/enumNotificationType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
import { ApplicationMemberInfoModel } from './applicationMemberInfoModel';

export class ApplicationLogNotificationModel extends BaseModuleEntity<string>  {

    LinkApplicationMemberId: string;
    MemberInfo: ApplicationMemberInfoModel;
    LinkApplicationId?: number;
    Application: ApplicationAppModel;
    Title: string;
    Content: string;
    ContentType: EnumNotificationType;
    ContentJson: string;
    ContentJsonClass: string;
    SmallImageId: number;
    BigImageId: number;
    SmallImageIdSrc: string;
    BigImageIdSrc: string;
    ErrorMessage: string;

}
