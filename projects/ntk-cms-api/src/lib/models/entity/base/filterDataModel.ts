import { EnumClauseType } from '../../enums/base/enumClauseType';
import { EnumFilterDataModelSearchTypes } from '../../enums/base/enumFilterDataModelSearchTypes';



export class FilterDataModel {
  constructor() {
    this.filters = new Array<FilterDataModel>();
  }
  filters: FilterDataModel[];
  value: any;
  values: any[];
  propertyName: string;
  propertyAnyName: string;
  clauseType: EnumClauseType;
  searchType: EnumFilterDataModelSearchTypes;
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
