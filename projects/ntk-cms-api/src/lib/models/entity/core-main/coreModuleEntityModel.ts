import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreModuleEntityModel extends BaseEntity<number> {
  linkModuleId: number;
  moduleName: string;
  moduleNameML: string;
  moduleEntityName: string;
  moduleEntityNameML: string;
  description: string;
}
