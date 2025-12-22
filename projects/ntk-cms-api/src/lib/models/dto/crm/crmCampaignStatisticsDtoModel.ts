/**
 * CrmCampaignStatisticsDtoModel
 * DTO آمار Campaign در CRM.
 */
export class CrmCampaignStatisticsDtoModel {
  /** شناسه Campaign */
  campaignId: string;

  /** نام Campaign */
  campaignName: string;

  /** تعداد کل Leadها */
  totalLeads: number;

  /** تعداد Leadهای تبدیل شده */
  convertedLeads: number;

  /** تعداد کل Opportunityها */
  totalOpportunities: number;

  /** تعداد Opportunityهای برنده شده */
  wonOpportunities: number;

  /** مجموع درآمد (مثلاً جمع مبلغ Opportunityهای Won) */
  totalRevenue: number;
}


