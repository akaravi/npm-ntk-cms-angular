import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class SmsLogInBoxModel extends BaseModuleEntity<string> {
  linkPrivateConfigId: string;
  linkApiNumberId: string;
  receiverDate: Date;
  analysisDate: Date;
  senderNumber: string;
  receiverNumber: string;
  inBoxType: string;
  message: string;
  isRead: boolean;
  isProcessed: boolean;
  credit: number;
  relayUrlStatus: boolean;
  relayUrlResult: string;
}
