import { FilterModel } from '../../entity/base/filterModel';

/**
 * فیلتر سفارش
 */
export class TransactionAssistantOrderFilterModel extends FilterModel {
  /** شناسه کاربر (در صورت نیاز به فیلتر بر اساس کاربر هسته) */
  linkCoreUserId?: number;
  /** وضعیت سفارش (رشته enum) */
  status?: string;
  /** وضعیت پرداخت (رشته enum) */
  paymentStatus?: string;
}
