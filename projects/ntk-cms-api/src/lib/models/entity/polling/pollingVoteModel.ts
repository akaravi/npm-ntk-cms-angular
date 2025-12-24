import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل رای نظرسنجی
 */
export class PollingVoteModel extends BaseModuleEntity<string> {
  /** لینک به شناسه محتوای نظرسنجی */
  linkPollingContentId: number;
  /** لینک به شناسه گزینه نظرسنجی */
  linkPollingOptionId: number;
  /** امتیاز گزینه */
  optionScore: number;
  /** شماره سریال دستگاه کاربر */
  deviceUserSerial: string;
  /** اطلاعات اضافی */
  otherInfo: string;

  /** لینک به شناسه عضو */
  linkMemberId: string;
}
