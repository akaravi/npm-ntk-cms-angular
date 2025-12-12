import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TransactionAssistantShipmentStatusEnum } from '../../enums/transaction-assistant/transactionAssistantShipmentStatusEnum';

/**
 * transactionAssistantOrderShipmentEventModel
 * رویدادهای وضعیت ارسال
 */
export class TransactionAssistantOrderShipmentEventModel extends BaseModuleEntity<string> {
  /** شناسه ارسال مرتبط */
  linkOrderShipmentId: string;
  /** وضعیت ارسال در لحظه رویداد */
  status: TransactionAssistantShipmentStatusEnum;
  /** پیام رویداد (اختیاری) */
  message?: string;
  /** زمان وقوع رویداد */
  occurredAt: Date;
}
