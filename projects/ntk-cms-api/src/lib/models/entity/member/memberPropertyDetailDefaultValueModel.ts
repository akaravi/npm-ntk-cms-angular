import { BaseModuleEntity } from '../base/baseModuleEntity';

export class MemberPropertyDetailDefaultValueModel extends BaseModuleEntity<number> {
  nameValue: string[];

  forceUse: boolean;
  multipleChoice: boolean;
  intValueMin: number;
  intValueMax: number;
}
