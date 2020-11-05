import { BaseModuleEntity } from '../base/baseModuleEntity';

export class TicketingTemplateModel extends BaseModuleEntity<number>  {
  title: string;
  htmlBody: string;
  linkTicketingDepartemenId: number;
}
