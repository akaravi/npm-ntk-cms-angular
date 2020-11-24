import { BaseModuleEntity } from '../base/baseModuleEntity';

export class BlogContentTagModel extends BaseModuleEntity<number> {
  LinkContentId: number;
  LinkTagid: number;
  // tslint:disable-next-line: variable-name
  virtual_ModuleContent?: any;
  ModuleContent?: any;

}
