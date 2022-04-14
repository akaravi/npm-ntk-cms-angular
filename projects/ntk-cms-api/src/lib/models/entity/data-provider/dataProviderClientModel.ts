import { DataProviderClientConnectionTypeEnum } from '../../enums/data-provider/dataProviderClientConnectionTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanClientModel } from './dataProviderPlanClientModel';

export class DataProviderClientModel extends BaseModuleEntity<number> {
  Title: string;
  ConnectionType: DataProviderClientConnectionTypeEnum;
  PlanClients: DataProviderPlanClientModel[];
}
