
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleRelationshipContentModel extends BaseModuleEntity<number> {
  Title: string;
  ModuleNameMain: number;
  LinkModuleContentIdMain: number;
  ModuleNameOther: number;
  LinkModuleContentIdOther: number;
}
