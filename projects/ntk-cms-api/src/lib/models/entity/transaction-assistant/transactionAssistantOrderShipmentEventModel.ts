import { BaseModuleEntity } from '../base/baseModuleEntity';
import { transactionAssistantShipmentStatusEnum } from '../../enums/transaction-assistant/transactionAssistantShipmentStatusEnum';

/**
 * transactionAssistantOrderShipmentEventModel
 * رویدادهای وضعیت ارسال
 */
export class transactionAssistantOrderShipmentEventModel extends BaseModuleEntity<string> {
  /** شناسه ارسال مرتبط */
  linkOrderShipmentId: string;
  /** وضعیت ارسال در لحظه رویداد */
  status: transactionAssistantShipmentStatusEnum;
  /** پیام رویداد (اختیاری) */
  message?: string;
  /** زمان وقوع رویداد */
  occurredAt: Date;
}

