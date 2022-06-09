import { DataProviderClientConnectionTypeEnum } from '../../enums/data-provider/dataProviderClientConnectionTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanClientModel } from './dataProviderPlanClientModel';

export class DataProviderClientModel extends BaseModuleEntity<number> {
  title: string;
  description: string;
  connectionType: DataProviderClientConnectionTypeEnum;
  keyCode: string;
  planClients: DataProviderPlanClientModel[];
}
