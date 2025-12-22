import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
/**
 * فرصت فروش CRM (Opportunity) شامل مبلغ، مرحله، وضعیت و ارتباطات
 */
export class CrmOpportunityModel extends BaseModuleEntity<string> {
  /** نام فرصت */
  name: string;
  /** لینک به حساب */
  linkAccountId?: string;
  /** لینک به مخاطب */
  linkContactId?: string;
  /** لینک به سرنخ */
  linkLeadId?: string;
  /** لینک به قیف فروش */
  linkPipelineId?: string;
  /** لینک به مرحله فعلی */
  linkStageId?: string;
  /** نوع فرصت */
  opportunityType: string;
  /** منبع فرصت */
  leadSource: string;
  /** مبلغ فرصت */
  amount?: number;
  /** واحد پول */
  currency: string;
  /** احتمال موفقیت (درصد) */
  probability?: number;
  /** تاریخ بسته شدن پیش‌بینی‌شده */
  expectedCloseDate?: Date;
  /** تاریخ بسته شدن واقعی */
  actualCloseDate?: Date;
  /** مرحله فعلی (نام) */
  stage: string;
  /** وضعیت (Open/Won/Lost/Abandoned) */
  status: string;
  /** دلیل باخت (اگر Lost) */
  lostReason: string;
  /** توضیحات */
  description: string;
  /** یادداشت‌ها */
  notes: string;
  /** لینک به کاربر اختصاص داده‌شده */
  linkAssignedUserId?: number;
  /** لینک به کمپین */
  linkCampaignId?: string;
  /** داده‌های اضافی JSON */
  otherDataJson: string;
}


