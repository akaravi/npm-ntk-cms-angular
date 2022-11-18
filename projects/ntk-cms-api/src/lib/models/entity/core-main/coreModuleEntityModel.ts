import { BaseEntity } from '../base/baseEntity';
export class CoreModuleEntityModel extends BaseEntity<number>{
  linkModuleId: number;
  moduleName: string;
  moduleEntityName: string;
  description: string;
}
