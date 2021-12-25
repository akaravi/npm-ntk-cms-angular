import { BaseModuleEntity } from "../base/baseModuleEntity";
import { UniversalMenuMenuItemProcessModel } from "./universalMenuMenuItemProcessModel";

export class UniversalMenuProcessModel extends BaseModuleEntity<number>{
  Title: string;
  ProcessCustomizationInputValue: string;
  LinkModuleProcessCustomizeId?: number;
  SetAsPublic:boolean;
  MenuItemProcesses: UniversalMenuMenuItemProcessModel[];
}
