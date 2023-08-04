import { EnumUniversalMenuPlatformType } from "../../enums/universal-menu/universalMenuPlatformTypeEnum";
import { BaseModuleEntity } from "../base/baseModuleEntity";
//@@tag-Version-2201011
export class UniversalMenuPlatformModel extends BaseModuleEntity<number>{
  title: string;
  platformType: EnumUniversalMenuPlatformType;
}
