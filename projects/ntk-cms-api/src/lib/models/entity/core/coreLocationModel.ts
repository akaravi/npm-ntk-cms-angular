import { BaseEntity } from './../base/baseEntity';
export class CoreLocationModel extends BaseEntity<number> {
  Title: string;
  LinkParentId?: any;
  LinkParentIdNode?: any;
  GeoLocationLatitude?: any;
  GeoLocationLongitude?: any;
  LocationType: number;
  // tslint:disable-next-line: variable-name
  virtual_Parent?: any;
  Parent?: any;
  Children?: any;
}
