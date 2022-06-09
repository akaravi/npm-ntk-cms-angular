import { EnumUniversalMenuPlatformType } from "../../enums/universal-menu/enumUniversalMenuPlatformType";
import { BaseModuleEntity } from "../base/baseModuleEntity";

export class UniversalMenuPlatformModel extends BaseModuleEntity<number>{
  title: string;
  platformType: EnumUniversalMenuPlatformType;
}
