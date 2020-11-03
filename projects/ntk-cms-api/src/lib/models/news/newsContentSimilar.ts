import { BaseModuleEntity } from '../base/baseModuleEntity';

export class NewsContentSimilar extends BaseModuleEntity<number> {
  Title: string;
  linkSourceid: number;
  linkDestinationid: number;
  virtual_Source?: any;
  source?: any;
  virtual_Destination?: any;
  destination?: any;
}
