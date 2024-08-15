import { ProcessInfoModel } from '../models/entity/base/processInfoModel';
import { TokenDeviceModel } from '../models/entity/core-token/tokenDeviceModel';
import { TokenInfoModel } from '../models/entity/core-token/tokenInfoModel';

export interface NtkCmsApiStoreInterface {
  tokenInfoStore: TokenInfoModel;
  deviceTokenInfoStore: TokenDeviceModel;
  isLoadingStore: boolean;
  processInfoStore: Map<string, ProcessInfoModel>;
}
