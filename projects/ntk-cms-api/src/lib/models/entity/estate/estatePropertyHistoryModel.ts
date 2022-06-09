import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstatePropertyHistoryModel extends BaseModuleEntity<string> {
  title: string;
  linkPropertyId: string;
  linkFileIds: string;
}
