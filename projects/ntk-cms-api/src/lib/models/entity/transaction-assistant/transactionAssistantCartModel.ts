import { transactionAssistantCartStatusEnum } from '../../enums/transaction-assistant/transactionAssistantCartStatusEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class transactionAssistantCartModel extends BaseModuleEntity<string> {
  linkCoreUserId?: number;
  closeDate?: Date;
  description?: string;
  status: transactionAssistantCartStatusEnum;
}
