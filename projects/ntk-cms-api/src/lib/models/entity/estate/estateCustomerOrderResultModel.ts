import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class EstateCustomerOrderResultModel extends BaseModuleEntity<string> {
  linkCustomerOrder: string;
  linkProperty: string;
  autoRecordAdd: boolean;
  linkCmsUserIdCustomer?: number;
  statusViewer: boolean;
  linkCmsUserIdViewer?: number;
  statusTasked: boolean;
  linkCmsUserIdTasked?: number;
  description: string;
}

