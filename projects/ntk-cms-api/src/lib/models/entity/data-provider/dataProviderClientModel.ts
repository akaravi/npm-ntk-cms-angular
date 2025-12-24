import { DataProviderClientConnectionTypeEnum } from '../../enums/data-provider/dataProviderClientConnectionTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanClientModel } from './dataProviderPlanClientModel';
//@@tag-Version-2201011
/**
 * مدل کلاینت ارائه‌دهنده داده
 */
export class DataProviderClientModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** نوع اتصال کلاینت */
  connectionType: DataProviderClientConnectionTypeEnum;
  /** کد کلید */
  keyCode: string;
  /** لیست پلن‌های کلاینت */
  planClients: DataProviderPlanClientModel[];
}
