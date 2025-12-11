import { BaseModuleEntity } from '../base/baseModuleEntity';
import { transactionAssistantOrderStatusEnum } from '../../enums/transaction-assistant/transactionAssistantOrderStatusEnum';
import { transactionAssistantPaymentStatusEnum } from '../../enums/transaction-assistant/transactionAssistantPaymentStatusEnum';
import { transactionAssistantOrderTypeEnum } from '../../enums/transaction-assistant/transactionAssistantOrderTypeEnum';
import { transactionAssistantExportDeliveryTypeEnum } from '../../enums/transaction-assistant/transactionAssistantExportDeliveryTypeEnum';

export class transactionAssistantOrderModel extends BaseModuleEntity<string> {
  linkCartId: string;
  status: transactionAssistantOrderStatusEnum;
  totalPrice: number;
  paymentStatus: transactionAssistantPaymentStatusEnum;
  description?: string;
  orderType: transactionAssistantOrderTypeEnum;
  exportDeliveryType?: transactionAssistantExportDeliveryTypeEnum;
  destinationCountry?: string;
  destinationCity?: string;
}


