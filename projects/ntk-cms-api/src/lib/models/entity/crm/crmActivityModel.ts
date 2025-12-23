import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
/**
 * فعالیت CRM - Activity (تماس، ایمیل، جلسه، وظیفه)
 */
export class CrmActivityModel extends BaseModuleEntity<string> {
  /** نوع فعالیت (Call, Email, Meeting, Task, Note) */
  activityType: string;
  /** موضوع */
  subject: string;
  /** توضیحات */
  description: string;
  /** ماژول SE (SE Module) */
  seModule: string;
  /** تاریخ و زمان شروع */
  startDate?: Date;
  /** زمان شروع (Time Start) */
  timeStart: string;
  /** تاریخ و زمان پایان */
  endDate?: Date;
  /** زمان پایان (Time End) */
  timeEnd: string;
  /** مدت زمان (دقیقه) */
  duration?: number;
  /** مدت زمان (ساعت) - Duration Hours */
  durationHours: string;
  /** مدت زمان (دقیقه) - Duration Minutes */
  durationMinutes: string;
  /** وضعیت (Planned, Completed, Cancelled, In Progress) */
  status: string;
  /** وضعیت رویداد (Event Status) */
  eventStatus: string;
  /** اولویت (Low, Medium, High, Urgent) */
  priority: string;
  /** نتیجه فعالیت */
  outcome: string;
  linkAccountId?: string;
  linkContactId?: string;
  linkLeadId?: string;
  linkOpportunityId?: string;
  linkDealId?: string;
  /** لینک به کمپین */
  linkCampaignId?: string;
  /** لینک به کاربر اختصاص داده شده */
  linkAssignedUserId?: number;
  /** لینک به کاربر ایجاد کننده */
  linkCreatedByUserId?: number;
  /** مکان (برای Meeting) */
  location: string;
  /** یادآوری (دقیقه قبل از شروع) */
  reminderMinutes?: number;
  /** تکرار (None, Daily, Weekly, Monthly, Yearly) */
  recurrence: string;
  /** شناسه تکرار (Recurrence ID) */
  recurrenceId?: number;
  /** ارسال اعلان (Send Notification) */
  sendNotification: boolean;
  /** بدون زمان (No Time) */
  noTime: boolean;
  /** قابلیت مشاهده (Visibility: all, public, private) */
  visibility: string;
  /** زمان یادآوری (Reminder Time) - دقیقه قبل از شروع */
  reminderTime?: number;
  /** آیا یادآوری ارسال شده است (Reminder Sent) */
  reminderSent: boolean;
  otherDataJson: string;
}


