import { EnumLocationType } from '../../enums/enumLocationType';
import { BaseEntity } from '../base/baseEntity';

export class CoreLocationModel extends BaseEntity<number> {
  Title: string;
  LinkParentId?: number;
  LinkParentIdNode: string;
  GeoLocationLatitude: string;
  GeoLocationLongitude: string;
  LocationType: EnumLocationType;
  // tslint:disable-next-line: variable-name
  virtual_Parent: CoreLocationModel;
  Parent: CoreLocationModel;
  Children: CoreLocationModel[];
  LinkImageId?: number;
  LinkImageIdSrc: string;
}
