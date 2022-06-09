import { BaseModuleEntity } from '../base/baseModuleEntity';

export class BlogContentSimilarModel{
  linkSourceId: number;
  linkDestinationId: number;
  // tslint:disable-next-line: variable-name
  virtual_Source?: any;
  source?: any;
  // tslint:disable-next-line: variable-name
  virtual_Destination?: any;
  destination?: any;
}
