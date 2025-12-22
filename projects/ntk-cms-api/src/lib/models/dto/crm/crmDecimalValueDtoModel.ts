//@@tag-Version-2201011
/**
 * مدل DTO برای بازگرداندن مقدار decimal از طریق ErrorExceptionResult.
 * این کلاس برای حل مشکل استفاده از value type در ErrorExceptionResult استفاده می‌شود.
 *
 * @example
 * ```typescript
 * const result = await crmDealService.ServiceCalculateTotalDealValueByOpportunity(opportunityId).toPromise();
 * if (result.isSuccess) {
 *   const totalValue = result.item.value;
 *   console.log('Total deal value:', totalValue);
 * }
 * ```
 */
export class CrmDecimalValueDtoModel {
  /**
   * مقدار decimal.
   * @type {number}
   */
  value: number;

  /**
   * سازنده پیش‌فرض.
   */
  constructor(value?: number) {
    this.value = value || 0;
  }
}

