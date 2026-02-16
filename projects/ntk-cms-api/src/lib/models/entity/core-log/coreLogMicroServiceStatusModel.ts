import { BaseEntity } from '../base/baseEntity';
/**
 * مدل وضعیت میکروسرویس
 */
export class CoreLogMicroServiceStatusModel extends BaseEntity<string> {
  appInfo: string;
  appVersion: string;
  appLocation: string;
  appInfoStart: Date;
  createDateMessage: Date;
  operationStatisticsJson: string;
  smsProviderStatusJson: string;
}
