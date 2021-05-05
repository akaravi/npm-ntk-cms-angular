import { BaseEntity } from '../base/baseEntity';
import { CoreModuleSaleHeaderGroupModel } from './coreModuleSaleHeaderGroupModel';
import { CoreModuleSaleItemModel } from './coreModuleSaleItemModel';
import { CoreModuleSaleSerialModel } from './coreModuleSaleSerialModel';

export class CoreModuleSaleHeaderModel extends BaseEntity<number>  {
  Title: string;
  FromDate: Date;
  ExpireDate: Date;
  SalePrice: number;
  AllowReuseDay: number;

  HasDemo: boolean;
  LinkModuleSaleHeaderGroupId: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsModuleSaleHeaderGroup: CoreModuleSaleHeaderGroupModel;
  Items: CoreModuleSaleItemModel[];
  Serials: CoreModuleSaleSerialModel[];

}
