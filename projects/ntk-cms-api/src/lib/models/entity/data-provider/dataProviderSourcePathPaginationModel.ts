import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderSourcePathModel } from './dataProviderSourcePathModel';
//@@tag-Version-2201011
/**
 * مدل تعرفه مسیر API DataProvider
 */
export class DataProviderSourcePathPaginationModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** لینک به شناسه مسیر Source */
  linkSourcePathId: string;
  /** مسیر Source (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_SourcePath: DataProviderSourcePathModel;
  /** الگوی تشخیص شماره */
  regulatorNumberJson: string;
  /** لیست الگوهای تشخیص شماره */
  regulatorNumberList: string[];
  /** قیمت خرید از سرویس دهنده */
  servicePricePerPage: number;
  /** قابلیت هزینه بر اساس دلیوری */
  serviceDeliveryCostBase: boolean;
  /** صفحه بندی خرید */
  serviceMessageLengthPaginationJson: string;
  /** لیست صفحه بندی خرید */
  serviceMessageLengthPaginationList: number[];
  /** هزینه بر اساس تحویل برای کاربر نهایی */
  endUserDeliveryCostBase: boolean;
  /** قیمت فروش */
  endUserPricePerPage: number;
  /** صفحه بندی فروش به کاربر */
  endUserMessageLengthPaginationJson: string;
  /** لیست صفحه بندی فروش */
  endUserMessageLengthPaginationList: number[];
}

