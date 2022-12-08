import { ActivityStatusEnum } from '../../enums/estate/activityStatusEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstateActivityTypeModel } from './estateActivityTypeModel';
//@@tag-Version-2201011
export class EstatePropertyHistoryModel extends BaseModuleEntity<string> {
  title: string;
  linkPropertyId: string;
  linkCustomerOrderId:string;
  linkAgentId:string;
  linkActivityTypeId: string;
  linkFileIds: string;
  activityType: EstateActivityTypeModel;
  activityStatus: ActivityStatusEnum;
  appointmentDateFrom: Date;
  appointmentDateTo: Date;
  description: string;
}
