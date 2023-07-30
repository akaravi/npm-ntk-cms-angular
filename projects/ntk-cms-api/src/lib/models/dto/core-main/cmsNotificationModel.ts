import { EnumNotificationType } from "../../enums/base/enumNotificationType";

export class CmsNotificationModel {
  icon!: string;
  badge!: string;
  sound!: string;
  title!: string;
  clickAction!: string;
  renotify: boolean;
  contentType: EnumNotificationType;
  content: string;
  contentJson: string;
  contentJsonClass: string;
  smallImageId?: number;
  bigImageId?: number;
}
