import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
export class CrmPipelineModel extends BaseModuleEntity<string> {
  name: string;
  description: string;
  isActive: boolean;
  isDefault: boolean;
  sortOrder?: number;
  color: string;
  icon: string;
  otherDataJson: string;
}


