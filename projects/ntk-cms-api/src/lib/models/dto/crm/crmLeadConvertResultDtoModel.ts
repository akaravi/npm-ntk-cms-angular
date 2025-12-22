/**
 * CrmLeadConvertResultDtoModel
 * DTO نتیجه تبدیل Lead به Opportunity / Account / Contact.
 */
export class CrmLeadConvertResultDtoModel {
  /** شناسه Lead تبدیل شده */
  leadId: string;

  /** شناسه Opportunity ایجاد شده (در صورت وجود) */
  opportunityId?: string;

  /** شناسه Account ایجاد شده (در صورت وجود) */
  accountId?: string;

  /** شناسه Contact ایجاد شده (در صورت وجود) */
  contactId?: string;
}


