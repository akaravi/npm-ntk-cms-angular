import { EnumClauseType } from '../../enums/enumClauseType';
import { EnumFilterDataModelSearchTypes } from '../../enums/enumFilterDataModelSearchTypes';



export class FilterDataModel {
  constructor() {
    this.Filters = new Array<FilterDataModel>();
  }
  Filters: FilterDataModel[];
  Value: any;
  Values: any[];
  PropertyName: string;
  PropertyAnyName: string;
  ClauseType: EnumClauseType;
  SearchType: EnumFilterDataModelSearchTypes;
  // StringValue: string;
  // StringContainValues: string[] = new Array<string>();
  // IntValue: number;
  // IntContainValues: number[] = new Array<number>();
  // DateTimeValue: Date;
  // BooleanValue: boolean;
  // EnumValue: string;
  // SingleValue: number;
  // DecimalValue: number;
   LatitudeValue: number;
   LongitudeValue: number;
   LatitudeLongitudeDistanceValue: number;
  // LatitudeLongitudeSortType: string;
  // HierarchyIdLevel: number;
  // ObjectIdContainValues: string[] = new Array<string>();
  // ObjectIdValue1: string;
}
