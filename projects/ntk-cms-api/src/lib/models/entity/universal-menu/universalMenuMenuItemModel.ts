import { BaseModuleEntity } from "../base/baseModuleEntity";
import { UniversalMenuMenuItemProcessModel } from "./universalMenuMenuItemProcessModel";
import { UniversalMenuPlatformModel } from "./universalMenuPlatformModel";
import { UniversalMenuProcessModel } from "./universalMenuProcessModel";

export class UniversalMenuMenuItemModel extends BaseModuleEntity<number>{
  Title: string;
  Key: string;
  LinkPlatformId?: number;
  Platform: UniversalMenuPlatformModel;
  virtual_Platform: UniversalMenuPlatformModel;
  HiddenMenu: boolean;
  AddKeyToTitle: boolean;
  LinkTaskSchedulerId?: number;
  ShowInMenuOrder?: number;
  LinkParentId?: number;
  ParentMenuItem: UniversalMenuMenuItemModel;
  virtual_ParentMenuItem: UniversalMenuMenuItemModel;
  ProcessJson: string;
  Processes: UniversalMenuProcessModel[];
  AccessCheck: boolean;
  AccessBeforLogin: boolean;
  AccessAfterLogin: boolean;
  AccessWhiteListGroup: string;
  AccessBlackListGroup: string;
  ViewCount: number;
  MenuItemProcesses: UniversalMenuMenuItemProcessModel[];
  Children: UniversalMenuMenuItemModel[];
}
