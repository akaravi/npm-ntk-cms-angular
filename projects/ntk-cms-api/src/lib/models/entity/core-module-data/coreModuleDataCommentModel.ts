import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class CoreModuleDataCommentModel extends BaseModuleEntity<string> {
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;
  linkParentId: string;
  writer: string;
  comment: string;
  viewPrivate: boolean;
  sumLikeClick: number;
  sumDisLikeClick: number;
}
