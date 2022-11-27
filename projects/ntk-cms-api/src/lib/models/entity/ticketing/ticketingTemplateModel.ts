import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class TicketingTemplateModel extends BaseModuleEntity<number>  {
  title: string;
  htmlBody: string;
  linkTicketingDepartemenId: number;
}
