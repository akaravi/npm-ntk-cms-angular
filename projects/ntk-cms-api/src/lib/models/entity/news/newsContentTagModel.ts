import { BaseModuleEntity } from '../base/baseModuleEntity';

export class NewsContentTagModel extends BaseModuleEntity<number> {
  linkContentid: number;
  linkTagid: number;
  // tslint:disable-next-line: variable-name
  virtual_ModuleContent?: any;
  moduleContent?: any;
  // tslint:disable-next-line: variable-name
  virtual_ModuleTag?: any;
  moduleTag?: any;
}
