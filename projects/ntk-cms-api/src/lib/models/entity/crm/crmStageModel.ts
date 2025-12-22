import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
export class CrmStageModel extends BaseModuleEntity<string> {
  name: string;
  description: string;
  probability?: number;
  sortOrder?: number;
  isActive: boolean;
  linkPipelineId?: string;
}


