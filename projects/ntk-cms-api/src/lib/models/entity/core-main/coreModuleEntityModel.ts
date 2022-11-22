import { BaseEntity } from '../base/baseEntity';
export class CoreModuleEntityModel extends BaseEntity<number>{
  linkModuleId: number;
  moduleName: string;
  moduleNameML: string;
  moduleEntityName: string;
  moduleEntityNameML: string;
  description: string;
}
