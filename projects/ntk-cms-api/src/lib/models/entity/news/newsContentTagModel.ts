import { BaseModuleEntity } from '../base/baseModuleEntity';

export class NewsContentTagModel extends BaseModuleEntity<number> {
  LinkContentid: number;
  LinkTagid: number;
  // tslint:disable-next-line: variable-name
  virtual_ModuleContent?: any;
  ModuleContent?: any;

}
