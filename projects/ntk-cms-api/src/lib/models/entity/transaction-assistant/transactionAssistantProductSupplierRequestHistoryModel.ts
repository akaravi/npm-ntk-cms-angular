import { transactionAssistantRequestStatusEnum } from '../../enums/transaction-assistant/transactionAssistantRequestStatusEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantProductSupplierRequestHistoryModel
 * تاریخچه درخواست/تامین
 */
export class transactionAssistantProductSupplierRequestHistoryModel extends BaseModuleEntity<string> {
  /** شناسه درخواست محصول */
  linkProductRequestId: string;
  /** شناسه تامین‌کننده (اختیاری) */
  linkSupplierId?: string;
  /** وضعیت درخواست در این رویداد */
  requestStatus: transactionAssistantRequestStatusEnum;
  /** توضیح رویداد (اختیاری) */
  message?: string;
  /** زمان وقوع */
  occurredAt: Date;
}

