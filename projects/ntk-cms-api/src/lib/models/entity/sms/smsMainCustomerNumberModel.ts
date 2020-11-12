import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsMainCustomerNumberModel extends BaseModuleEntity<number> {
  Status: boolean;
  FirstSubmit: string;
  UsanceDate: string;
  Salestatus: boolean;
  LinkPathAndCustomerNumber?: any;
  ApiPathAndCustomerNumbers?: any;
}
