import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathAndApiNumberModel } from './smsMainApiPathAndApiNumberModel';
//@@tag-Version-2201011
export class SmsMainApiNumberModel extends BaseModuleEntity<string> {
  numberChar: string;
  firstSubmit: Date;
  usanceDate: Date;
  expireDate: Date;
  saleStatus: boolean;
  isPublic: boolean;
  priority?: number;
  deliveryRelayStatus: boolean;
  deliveryRelayUrl: string;
  smsRelayStatus: boolean;
  smsRelayUrl:string;
  actionMemo:string;
  apiPathAndApiNumbers: SmsMainApiPathAndApiNumberModel[];
}
