import { EnumLocationType } from '../../enums/base/enumLocationType';
import { BaseEntity } from '../base/baseEntity';

export class CoreLocationModel extends BaseEntity<number> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  linkParentId?: number;
  linkParentIdNode: string;
  geoLocationLatitude: string;
  geoLocationLongitude: string;
  locationType: EnumLocationType;
  // tslint:disable-next-line: variable-name
  virtual_Parent: CoreLocationModel;
  parent: CoreLocationModel;
  children: CoreLocationModel[];
  linkImageId?: number;
  linkImageIdSrc: string;
}
