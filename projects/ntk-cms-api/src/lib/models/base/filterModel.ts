import { FilterDataModel } from './filterDataModel';
import { ExportFileModel } from './exportFileModel';
import { EnumSortType } from '../enums/enumSortType';

export class FilterModel {
  Filters: FilterDataModel[] = new Array<FilterDataModel>();
  CountLoad = false;
  AccessLoad = false;
  TotalRowData: number;
  SkipRowData = 0;
  CurrentPageNumber = 1;
  RowPerPage = 20;
  SortType: EnumSortType = 1;
  SortColumn: string;
  ExportFile: ExportFileModel;
}
