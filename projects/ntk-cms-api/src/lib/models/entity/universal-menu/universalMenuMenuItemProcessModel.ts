import { BaseModuleEntity } from "../base/baseModuleEntity";
import { UniversalMenuMenuItemModel } from "./universalMenuMenuItemModel";
import { UniversalMenuProcessModel } from "./universalMenuProcessModel";
//@@tag-Version-2201011
export class UniversalMenuMenuItemProcessModel extends BaseModuleEntity<number> {
  menuId: number;
  processId: number;
  virtual_Process: UniversalMenuProcessModel;
  process: UniversalMenuProcessModel;

  virtual_MenuItem: UniversalMenuMenuItemModel;
  menuItem: UniversalMenuMenuItemModel;
}
