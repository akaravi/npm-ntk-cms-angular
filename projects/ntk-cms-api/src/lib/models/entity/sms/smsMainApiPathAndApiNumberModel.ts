import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiNumberModel } from './smsMainApiNumberModel';
//@@tag-Version-2201011
/**
 * مدل مسیر API و شماره API
 */
export class SmsMainApiPathAndApiNumberModel extends BaseModuleEntity<string> {
  /** لینک به شناسه مسیر API */
  linkApiPathId: string;
  /** لینک به شناسه شماره API */
  linkApiNumberId: string;
  /** مسیر API */
  apiPath: SmsMainApiNumberModel;
  /** شماره API */
  apiNumber: SmsMainApiNumberModel;
}
