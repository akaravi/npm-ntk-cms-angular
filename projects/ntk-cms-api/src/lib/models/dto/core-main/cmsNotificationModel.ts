import { NotificationTypeEnum } from "../../enums/base/notificationTypeEnum";

export class CmsNotificationModel {
  icon!: string;
  badge!: string;
  sound!: string;
  title!: string;
  clickAction!: string;
  renotify: boolean;
  contentType: NotificationTypeEnum;
  content: string;
  contentJson: string;
  contentJsonClass: string;
  smallImageId?: number;
  bigImageId?: number;
}
