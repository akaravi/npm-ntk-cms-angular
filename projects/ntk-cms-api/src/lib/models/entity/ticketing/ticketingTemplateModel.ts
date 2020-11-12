import { BaseModuleEntity } from '../base/baseModuleEntity';

export class TicketingTemplateModel extends BaseModuleEntity<number>  {
  Title: string;
  HtmlBody: string;
  LinkTicketingDepartemenId: number;
}
