import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';
//@@tag-Version-2201011
/**
 * مدل مسیر جانشین API پیامک
 */
export class SmsMainApiPathSupersedeModel extends BaseModuleEntity<string> {
  /** لینک به شناسه مسیر API */
  linkApiPathId: string;
  /** لینک به شناسه مسیر جانشین API */
  linkApiPathSupersedeId: string;
  /** اولویت مسیر */
  priority: number;
  /** از تاریخ */
  fromDate: Date;
  /** تاریخ انقضا */
  expireDate: Date;
  /** مسیر API (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_ApiPath: SmsMainApiPathModel;
  /** مسیر API */
  apiPath: SmsMainApiPathModel;
  /** مسیر جانشین API (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_ApiPathSupersede: SmsMainApiPathModel;
  /** مسیر جانشین API */
  apiPathSupersede: SmsMainApiPathModel;
}
