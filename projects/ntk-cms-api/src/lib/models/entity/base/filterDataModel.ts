import { EnumClauseType } from '../../enums/enumClauseType';
import { EnumFilterDataModelSearchTypes } from '../../enums/enumFilterDataModelSearchTypes';



export class FilterDataModel {
  constructor() {
    this.Filters = new Array<FilterDataModel>();
  }
  Filters: FilterDataModel[];
  Value: any;
  StringForceNullSearch: boolean;
  DecimalForceNullSearch: boolean;
  LatitudeLongitudeForceNullSearch: boolean;
  IntValueForceNullSearch: boolean;
  PropertyName: string;
  PropertyAnyName: string;
  ClauseType: EnumClauseType;
  SearchType: EnumFilterDataModelSearchTypes;
  StringValue1: string;
  StringContainValues: string[] = new Array<string>();
  IntValue1: number;
  IntValue2: number;
  IntContainValues: number[] = new Array<number>();
  DateTimeValue1: Date;
  DateTimeValue2: Date;
  BooleanValue1: boolean;
  EnumValue1: string;
  SingleValue1: number;
  SingleValue2: number;
  DecimalValue1: number;
  DecimalValue2: number;
  LatitudeValue1: number;
  LatitudeValue2: number;
  LatitudeLongitudeDistanceValue1: number;
  LatitudeLongitudeDistanceValue2: number;
  LatitudeLongitudeSortType: string;
  HierarchyIdLevel: number;
  ObjectIdContainValues: string[] = new Array<string>();
  ObjectIdValue1: string;
}
