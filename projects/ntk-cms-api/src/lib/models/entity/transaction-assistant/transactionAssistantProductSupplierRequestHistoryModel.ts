import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TransactionAssistantRequestStatusEnum } from '../../enums/transaction-assistant/transactionAssistantRequestStatusEnum';

/**
 * transactionAssistantProductSupplierRequestHistoryModel
 * تاریخچه درخواست/تامین
 */
export class TransactionAssistantProductSupplierRequestHistoryModel extends BaseModuleEntity<string> {
  /** شناسه درخواست محصول */
  linkProductRequestId: string;
  /** شناسه تامین‌کننده (اختیاری) */
  linkSupplierId?: string;
  /** وضعیت درخواست در این رویداد */
  requestStatus: TransactionAssistantRequestStatusEnum;
  /** توضیح رویداد (اختیاری) */
  message?: string;
  /** زمان وقوع */
  occurredAt: Date;
}
