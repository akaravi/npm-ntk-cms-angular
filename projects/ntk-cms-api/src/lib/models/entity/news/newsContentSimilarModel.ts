import { BaseModuleEntity } from '../base/baseModuleEntity';

export class NewsContentSimilarModel  {
  LinkSourceId: number;
  LinkDestinationId: number;
  // tslint:disable-next-line: variable-name
  virtual_Source?: any;
  Source?: any;
  // tslint:disable-next-line: variable-name
  virtual_Destination?: any;
  Destination?: any;
}
