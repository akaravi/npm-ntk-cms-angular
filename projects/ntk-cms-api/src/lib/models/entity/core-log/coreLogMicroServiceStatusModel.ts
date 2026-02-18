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
  /**
   * نوع میکروسرویس (مثلاً MagfaSms)
   */
  instanceIdentifier?: string;
  /**
   * کد اختصاصی نمونه در زمان اجرا
   */
  runtimeIdentity?: string;
  /**
   * هدف مسیریابی برای Ping و Command - InstanceIdentifier_RuntimeIdentity برای نمونه خاص، InstanceIdentifier برای broadcast
   */
  get routeTarget(): string {
    if (this.instanceIdentifier && this.runtimeIdentity) {
      return this.instanceIdentifier + '_' + this.runtimeIdentity;
    }
    return this.instanceIdentifier || '';
  }
}
