import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstateCategoryRackFolderOrderModel } from './estateCategoryRackFolderOrderModel';
import { EstateCategoryRackFolderPropertyModel } from './estateCategoryRackFolderPropertyModel';

//@@tag-Version-2212011
export class EstateCategoryRackModel extends BaseModuleEntity<string> {
  title: string;
  description: string;
  iconFont: string;
  iconColor: string;
  linkMainImageId: number;
  linkMainImageIdSrc: string;
  rackFolderProperties: EstateCategoryRackFolderPropertyModel[];
  rackFolderOrders: EstateCategoryRackFolderOrderModel[];
}
