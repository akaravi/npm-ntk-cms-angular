import { BaseModuleEntity } from '../base/baseModuleEntity';

export class NewsContentSimilar extends BaseModuleEntity<number> {
  Title: string;
  linkSourceid: number;
  linkDestinationid: number;
  // tslint:disable-next-line: variable-name
  virtual_Source?: any;
  source?: any;
  // tslint:disable-next-line: variable-name
  virtual_Destination?: any;
  destination?: any;
}
