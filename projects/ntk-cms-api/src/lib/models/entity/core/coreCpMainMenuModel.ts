import { EnumMenuPlaceType } from '../../enums/enumMenuPlaceType';
import { BaseEntity } from '../base/baseEntity';

export class CoreCpMainMenuModel extends BaseEntity<number> {
  Title: string;
  TitleML: string;
  TitleResourceLanguage: string;
  Color: string;
  TitleEn: string;
  Icon: string;
  AddressLink: string;
  RouteAddressLink: string;
  LinkParentId: number;
  LinkModuleId: number;
  Description: string;
  ShowInMenu: number;
  ShowInMenuOrder: number;
  ShowInAccessAdminAllowToProfessionalData: boolean;
  MenuPlaceType: EnumMenuPlaceType;
  Children: CoreCpMainMenuModel[];
}
