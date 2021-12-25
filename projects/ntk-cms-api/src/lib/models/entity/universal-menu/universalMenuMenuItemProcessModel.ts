import { BaseModuleEntity } from "../base/baseModuleEntity";
import { UniversalMenuMenuItemModel } from "./universalMenuMenuItemModel";
import { UniversalMenuProcessModel } from "./universalMenuProcessModel";

export class UniversalMenuMenuItemProcessModel extends BaseModuleEntity<number>{
  MenuId: number;
  ProcessId: number;
  virtual_Process: UniversalMenuProcessModel;
  Process: UniversalMenuProcessModel;

  virtual_MenuItem: UniversalMenuMenuItemModel;
  MenuItem: UniversalMenuMenuItemModel;
}
