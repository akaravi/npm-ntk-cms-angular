import { FilterDataModel } from './filterDataModel';
import { ExportFileModel } from './exportFileModel';
import { EnumSortType } from '../../enums/base/sortTypeEnum';
//@@tag-Version-2201011
export class FilterModel {
  constructor() {
    this.filters = new Array<FilterDataModel>();
  }
  filters: FilterDataModel[];
  countLoad = false;
  accessLoad = false;
  totalRowData: number;
  skipRowData = 0;
  currentPageNumber = 1;
  rowPerPage = 20;
  sortType: EnumSortType = 1;
  sortColumn: string;
  exportFile: ExportFileModel;
}
