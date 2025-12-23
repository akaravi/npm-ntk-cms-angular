import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
export class CrmCampaignModel extends BaseModuleEntity<string> {
  /** شماره کمپین (Campaign Number) */
  campaignNo: string;
  name: string;
  campaignType: string;
  status: string;
  startDate?: Date;
  endDate?: Date;
  budget?: number;
  actualCost?: number;
  expectedRevenue?: number;
  actualRevenue?: number;
  expectedResponse?: number;
  actualResponse?: number;
  /** پاسخ مورد انتظار (Expected Response) */
  expectedResponseString: string;
  /** تعداد ارسال شده (Number Sent) */
  numSent?: number;
  /** شناسه محصول (Product ID) */
  productId?: number;
  /** اسپانسر (Sponsor) */
  sponsor: string;
  /** مخاطب هدف (Target Audience) */
  targetAudience: string;
  /** اندازه هدف (Target Size) */
  targetSize?: number;
  /** تعداد پاسخ مورد انتظار (Expected Response Count) */
  expectedResponseCount?: number;
  /** تعداد فروش مورد انتظار (Expected Sales Count) */
  expectedSalesCount?: number;
  /** بازگشت سرمایه مورد انتظار (Expected ROI) */
  expectedRoi?: number;
  /** تعداد پاسخ واقعی (Actual Response Count) */
  actualResponseCount?: number;
  /** تعداد فروش واقعی (Actual Sales Count) */
  actualSalesCount?: number;
  /** بازگشت سرمایه واقعی (Actual ROI) */
  actualRoi?: number;
  /** تاریخ بسته شدن (Closing Date) */
  closingDate?: Date;
  description: string;
  notes: string;
}


