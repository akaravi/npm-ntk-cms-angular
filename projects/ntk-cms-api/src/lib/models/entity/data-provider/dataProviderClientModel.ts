import { DataProviderClientConnectionTypeEnum } from '../../enums/data-provider/dataProviderClientConnectionTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanClientModel } from './dataProviderPlanClientModel';

export class DataProviderClientModel extends BaseModuleEntity<number> {
  Title: string;
  Description: string;
  ConnectionType: DataProviderClientConnectionTypeEnum;
  KeyCode: string;
  PlanClients: DataProviderPlanClientModel[];
}
