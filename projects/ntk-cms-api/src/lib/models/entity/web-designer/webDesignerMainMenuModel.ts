import { EnumMenuPlaceType } from '../../enums/enumMenuPlaceType';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class WebDesignerMainMenuModel  extends BaseModuleEntity<string>{
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  color: string;
  icon: string;
  routeAddressLink: string;
  routeAddressBlankPage: boolean;
  linkParentId: string;
  description: string;
  showInMenuOrder: number;
  menuPlaceType: EnumMenuPlaceType;
  children: WebDesignerMainMenuModel[];
}
