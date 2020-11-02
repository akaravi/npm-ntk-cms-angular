import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsMainCustomerNumberModel extends BaseModuleEntity<number> {
  status: boolean;
  firstSubmit: string;
  usanceDate: string;
  Salestatus: boolean;
  linkPathAndCustomerNumber?: any;
  apiPathAndCustomerNumbers?: any;
}
