import { RecordStatusEnum } from '../../enums/base/recordStatusEnum';
import { SortTypeEnum } from '../../enums/base/sortTypeEnum';
import { ExportFileModel } from './exportFileModel';
import { FilterDataModel } from './filterDataModel';
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
  sortType: SortTypeEnum = 1;
  sortColumn: string;
  exportFile: ExportFileModel;
  /**fase searchType */
  filterActionSearchLinkEntityId?: number;
  filterActionSearchLinkUserId?: number;
  filterActionSearchLinkSiteId?: number;
  filterActionSearchLinkModuleId?: number;
  filterActionSearchRecordStatus?: RecordStatusEnum;
  filterActionSearchFromDate?: Date;
  filterActionSearchToDate?: Date;
  /**fase searchType */
}
