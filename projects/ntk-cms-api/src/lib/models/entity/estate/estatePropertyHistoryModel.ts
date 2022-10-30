import { ActivityStatusEnum } from '../../enums/estate/activityStatusEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstateActivityTypeModel } from './estateActivityTypeModel';

export class EstatePropertyHistoryModel extends BaseModuleEntity<string> {
  title: string;
  linkPropertyId: string;
  linkActivityTypeId: string;
  linkFileIds: string;
  activityType: EstateActivityTypeModel;
  activityStatus: ActivityStatusEnum;
  appointmentDateFrom: Date;
  appointmentDateTo: Date;
  description: string;
}
