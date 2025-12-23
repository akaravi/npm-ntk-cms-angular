import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
/**
 * تاریخچه مرحله فرصت CRM (Opportunity Stage History)
 */
export class CrmOpportunityStageHistoryModel extends BaseModuleEntity<string> {
  /** لینک به فرصت */
  linkOpportunityId: string;
  /** مبلغ */
  amount?: number;
  /** مرحله */
  stage: string;
  /** احتمال موفقیت (درصد) */
  probability?: number;
  /** درآمد پیش‌بینی شده */
  expectedRevenue?: number;
  /** تاریخ بسته شدن */
  closeDate?: Date;
  /** تاریخ آخرین تغییر */
  lastModified?: Date;
}

