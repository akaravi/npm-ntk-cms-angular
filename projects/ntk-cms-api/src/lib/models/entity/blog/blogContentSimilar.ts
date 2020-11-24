import { BaseModuleEntity } from '../base/baseModuleEntity';

export class BlogContentSimilar extends BaseModuleEntity<number> {
  Title: string;
  LinkSourceid: number;
  LinkDestinationid: number;
  // tslint:disable-next-line: variable-name
  virtual_Source?: any;
  Source?: any;
  // tslint:disable-next-line: variable-name
  virtual_Destination?: any;
  Destination?: any;
}
