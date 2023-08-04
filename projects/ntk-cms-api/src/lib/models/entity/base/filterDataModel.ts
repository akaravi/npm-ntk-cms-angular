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
  // StringValue: string;
  // StringContainValues: string[] = new Array<string>();
  // IntValue: number;
  // IntContainValues: number[] = new Array<number>();
  // DateTimeValue: Date;
  // BooleanValue: boolean;
  // EnumValue: string;
  // SingleValue: number;
  // DecimalValue: number;
  latitudeValue: number;
  longitudeValue: number;
  latitudeLongitudeDistanceValue: number;
  // LatitudeLongitudeSortType: string;
  // HierarchyIdLevel: number;
  // ObjectIdContainValues: string[] = new Array<string>();
  // ObjectIdValue1: string;
}
