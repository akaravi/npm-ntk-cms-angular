import { ClauseTypeEnum } from '../../enums/base/clauseTypeEnum';
import { FilterDataModelSearchTypesEnum } from '../../enums/base/filterDataModelSearchTypesEnum';
//@@tag-Version-2201011
export class FilterDataModel {
  constructor() {
    this.filters = new Array<FilterDataModel>();
  }
  filters: FilterDataModel[];
  value: any;
  values: any[];
  propertyName: string;
  propertyAnyName: string;
  clauseType: ClauseTypeEnum;
  searchType: FilterDataModelSearchTypesEnum;
  latitudeValue: number;
  longitudeValue: number;
  latitudeLongitudeDistanceValue: number;
}
