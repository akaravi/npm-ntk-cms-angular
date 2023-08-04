
import { ActivityStatusEnumEstate } from '../../enums/estate/estateActivityStatusEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstateActivityTypeModel } from './estateActivityTypeModel';
//@@tag-Version-2201011
export class EstatePropertyHistoryModel extends BaseModuleEntity<string> {
  title: string;
  linkPropertyId: string;
  linkCustomerOrderId: string;
  linkEstateUserId: string;
  linkEstateAgencyId: string;
  linkActivityTypeId: string;
  linkFileIds: string;
  linkFileIdsSrc: string[];
  activityType: EstateActivityTypeModel;
  activityStatus: ActivityStatusEnumEstate;
  appointmentDateFrom: Date;
  appointmentDateTo: Date;
  description: string;
  descriptionHidden: string;
}
