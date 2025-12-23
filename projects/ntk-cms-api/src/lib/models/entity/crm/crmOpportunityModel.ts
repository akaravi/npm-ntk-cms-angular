import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
/**
 * فرصت فروش CRM (Opportunity) شامل مبلغ، مرحله، وضعیت و ارتباطات
 */
export class CrmOpportunityModel extends BaseModuleEntity<string> {
  /** شماره فرصت (Potential Number) */
  potentialNo: string;
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
  /** گام بعدی (Next Step) */
  nextStep: string;
  /** آیا خصوصی است (Private) */
  isPrivate: boolean;
  /** نوع درآمد (Type of Revenue) */
  typeOfRevenue: string;
  /** شناسه محصول (Product ID) */
  productId?: number;
  /** نسخه محصول (Product Version) */
  productVersion: string;
  /** مرجع پیشنهاد (Quotation Reference) */
  quotationRef: string;
  /** مخاطب شریک (Partner Contact) */
  partnerContact: string;
  /** یادداشت‌ها (Remarks) */
  remarks: string;
  /** هزینه اجرا (Runtime Fee) */
  runtimeFee?: number;
  /** تاریخ پیگیری (Follow Up Date) */
  followUpDate?: Date;
  /** وضعیت ارزیابی (Evaluation Status) */
  evaluationStatus: string;
  /** دسته‌بندی پیش‌بینی (Forecast Category) */
  forecastCategory?: number;
  /** تحلیل نتیجه (Outcome Analysis) */
  outcomeAnalysis?: number;
  /** مبلغ پیش‌بینی (Forecast Amount) */
  forecastAmount?: number;
  /** آیا از Lead تبدیل شده است */
  isConvertedFromLead: boolean;
  /** آیا تبدیل شده است (Converted) */
  converted: boolean;
  /** داده‌های اضافی JSON */
  otherDataJson: string;
}


