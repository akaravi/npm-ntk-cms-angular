import { BaseModuleEntity } from "../base/baseModuleEntity";
import { UniversalMenuMenuItemProcessModel } from "./universalMenuMenuItemProcessModel";
import { UniversalMenuPlatformModel } from "./universalMenuPlatformModel";
import { UniversalMenuProcessModel } from "./universalMenuProcessModel";

export class UniversalMenuMenuItemModel extends BaseModuleEntity<number>{
  title: string;
  key: string;
  linkPlatformId?: number;
  platform: UniversalMenuPlatformModel;
  virtual_Platform: UniversalMenuPlatformModel;
  hiddenMenu: boolean;
  addKeyToTitle: boolean;
  linkTaskSchedulerId?: number;
  showInMenuOrder?: number;
  linkParentId?: number;
  parentMenuItem: UniversalMenuMenuItemModel;
  virtual_ParentMenuItem: UniversalMenuMenuItemModel;
  processJson: string;
  processes: UniversalMenuProcessModel[];
  accessCheck: boolean;
  accessBeforLogin: boolean;
  accessAfterLogin: boolean;
  accessWhiteListGroup: string;
  accessBlackListGroup: string;
  viewCount: number;
  menuItemProcesses: UniversalMenuMenuItemProcessModel[];
  children: UniversalMenuMenuItemModel[];
}
