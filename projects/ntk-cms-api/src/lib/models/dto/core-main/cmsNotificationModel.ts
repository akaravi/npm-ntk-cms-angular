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
  contentAction!: string;
  contentClassName: string;
  contentJson: string;
  smallImageId?: number;
  bigImageId?: number;
  smallImageIdSrc: string;
  bigImageIdSrc: string;
}
