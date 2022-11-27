
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class CoreModuleRelationshipContentModel extends BaseModuleEntity<number> {
  title: string;
  moduleNameMain: number;
  linkModuleContentIdMain: number;
  moduleNameOther: number;
  linkModuleContentIdOther: number;
}
