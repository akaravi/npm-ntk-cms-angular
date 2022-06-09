
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleRelationshipContentModel extends BaseModuleEntity<number> {
  title: string;
  moduleNameMain: number;
  linkModuleContentIdMain: number;
  moduleNameOther: number;
  linkModuleContentIdOther: number;
}
