import { LocationTypeEnum } from '../../enums/base/locationTypeEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreLocationModel extends BaseEntity<number> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  linkParentId?: number;
  linkParentIdNode: string;
  geoLocationLatitude: string;
  geoLocationLongitude: string;
  locationType: LocationTypeEnum;
  // tslint:disable-next-line: variable-name
  virtual_Parent: CoreLocationModel;
  parent: CoreLocationModel;
  children: CoreLocationModel[];
  linkImageId?: number;
  linkImageIdSrc: string;
}
