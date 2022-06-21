import { EnumMenuPlaceType } from '../../enums/enumMenuPlaceType';
import { BaseEntity } from '../base/baseEntity';

export class CoreCpMainMenuModel extends BaseEntity<number> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  color: string;
  icon: string;

  routeAddressLink: string;
  routeAddressBlankPage: boolean;
  linkParentId: number;
  linkModuleId: number;
  description: string;
  showInMenu: number;
  showInMenuOrder: number;
  showInAccessAdminAllowToProfessionalData: boolean;
  menuPlaceType: EnumMenuPlaceType;
  children: CoreCpMainMenuModel[];
}
