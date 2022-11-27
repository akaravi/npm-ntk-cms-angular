import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class MemberPropertyDetailDefaultValueModel extends BaseModuleEntity<number> {
  nameValue: string[];

  forceUse: boolean;
  multipleChoice: boolean;
  intValueMin: number;
  intValueMax: number;
}
