import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathAndApiNumberModel } from './smsMainApiPathAndApiNumberModel';
//@@tag-Version-2201011
export class SmsMainApiNumberModel extends BaseModuleEntity<string> {
  numberChar: string;
  accessUseStartDate: Date;
  expireDate: Date;
  lastUseOfDate: Date;
  saleStatus: boolean;
  isPublic: boolean;
  priority?: number;
  deliveryRelayStatus: boolean;
  deliveryRelayUrl: string;
  smsRelayStatus: boolean;
  smsRelayUrl: string;
  actionMemo: string;
  /**متغیر های ارسال */
  apiSendMessageAddTextFirst: string;
  apiSendMessageAddTextEnd: string;
  sendMessageAddTextFirst: string;
  sendMessageAddTextEnd: string;
  /**متغیر های ارسال */
  apiPathAndApiNumbers: SmsMainApiPathAndApiNumberModel[];
}
