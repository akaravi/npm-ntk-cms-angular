import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2212011
export class EstatePropertySupplierCategoryModel extends BaseModuleEntity<string>
{
  title: string;
  description: string;
  iconFont: string;
  iconColor: string;
  linkMainImageId: number;
  linkMainImageIdSrc: string;
  linkParentIdNode: string;
  linkParentId: string;
  children: EstatePropertySupplierCategoryModel[];
  category: EstatePropertySupplierCategoryModel;
  virtual_Category: EstatePropertySupplierCategoryModel;
}
