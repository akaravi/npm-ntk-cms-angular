import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل قالب تیکت
 */
export class TicketingTemplateModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** متن HTML */
  htmlBody: string;
  /** لینک به شناسه دپارتمان تیکت */
  linkTicketingDepartemenId: number;
}
