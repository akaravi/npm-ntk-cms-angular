import { EnumCmsSiteMenuAreaType } from '../../enums/enumCmsSiteMenuAreaType';
import { EnumMenuPlaceType } from '../../enums/enumMenuPlaceType';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class WebDesignerMainMenuModel  extends BaseModuleEntity<string>{
  Title: string;
  TitleML: string;
  TitleResourceLanguage: string;
  Color: string;
  TitleEn: string;
  Icon: string;
  RouteAddressLink: string;
  RouteAddressBlankPage: boolean;
  LinkParentId: string;
  Description: string;
  ShowInMenuOrder: number;
  MenuPlaceType: EnumMenuPlaceType;
  Children: WebDesignerMainMenuModel[];
}
