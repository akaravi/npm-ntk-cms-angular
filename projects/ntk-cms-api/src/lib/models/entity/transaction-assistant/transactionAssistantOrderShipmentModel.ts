import { BaseModuleEntity } from '../base/baseModuleEntity';
import { transactionAssistantShipmentStatusEnum } from '../../enums/transaction-assistant/transactionAssistantShipmentStatusEnum';
import { transactionAssistantCustomsStatusEnum } from '../../enums/transaction-assistant/transactionAssistantCustomsStatusEnum';

export class transactionAssistantOrderShipmentModel extends BaseModuleEntity<string> {
  linkOrderId: string;
  linkSupplierId?: string;
  carrierName?: string;
  driverName?: string;
  driverPhone?: string;
  trackingCode?: string;
  weight?: number;
  expectedDeliveryAt?: Date;
  deliveredAt?: Date;
  status: transactionAssistantShipmentStatusEnum;
  customsStatus?: transactionAssistantCustomsStatusEnum;
  customsDeclarationNumber?: string;
  customsClearedAt?: Date;
  originCustomsName?: string;
  destinationCustomsName?: string;
  customsDutyAmount?: number;
}


