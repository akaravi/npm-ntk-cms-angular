/**
 * transactionAssistantCartDtoModel
 * DTO سبد خرید (C#) با حفظ نام فیلدها (Link*)
 */
export class transactionAssistantCartDtoModel {
  /** شناسه سبد */
  id: string;
  /** شناسه کاربر هسته مالک سبد (اختیاری برای مهمان) */
  linkCoreUserId?: number;
  /** وضعیت سبد (رشته enum) */
  status: string;
}


