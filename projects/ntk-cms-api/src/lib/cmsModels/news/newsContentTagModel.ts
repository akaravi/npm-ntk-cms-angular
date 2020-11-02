import { BaseModuleEntity } from '../base/baseModuleEntity';

export class NewsContentTagModel extends BaseModuleEntity<number> {
  linkContentid: number;
  linkTagid: number;
  virtual_ModuleContent?: any;
  moduleContent?: any;
  virtual_ModuleTag?: any;
  moduleTag?: any;
}
