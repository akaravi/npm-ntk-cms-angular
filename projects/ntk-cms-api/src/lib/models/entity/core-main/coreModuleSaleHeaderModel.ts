import { BaseEntity } from '../base/baseEntity';
import { CoreModuleSaleHeaderGroupModel } from './coreModuleSaleHeaderGroupModel';
import { CoreModuleSaleItemModel } from './coreModuleSaleItemModel';
import { CoreModuleSaleSerialModel } from './coreModuleSaleSerialModel';

export class CoreModuleSaleHeaderModel extends BaseEntity<number>  {
  title: string;
  description: string;
  fromDate: Date;
  expireDate: Date;
  salePrice: number;
  allowReuseDay: number;

  hasDemo: boolean;
  linkModuleSaleHeaderGroupId: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsModuleSaleHeaderGroup: CoreModuleSaleHeaderGroupModel;
  items: CoreModuleSaleItemModel[];
  serials: CoreModuleSaleSerialModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
