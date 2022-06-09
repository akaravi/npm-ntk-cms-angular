import { BaseModuleEntity } from "../base/baseModuleEntity";
import { UniversalMenuMenuItemProcessModel } from "./universalMenuMenuItemProcessModel";

export class UniversalMenuProcessModel extends BaseModuleEntity<number>{
  title: string;
  processCustomizationInputValue: string;
  linkModuleProcessCustomizeId?: number;
  setAsPublic:boolean;
  menuItemProcesses: UniversalMenuMenuItemProcessModel[];
}
