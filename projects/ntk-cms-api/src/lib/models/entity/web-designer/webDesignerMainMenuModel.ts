import { MenuPlaceTypeEnum } from '../../enums/base/menuPlaceTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class WebDesignerMainMenuModel extends BaseModuleEntity<string> {
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
  menuPlaceType: MenuPlaceTypeEnum;
  children: WebDesignerMainMenuModel[];
}
