import { TokenDeviceModel } from '../models/entity/core-token/tokenDeviceModel';
import { TokenInfoModel } from '../models/entity/core-token/tokenInfoModel';

export interface NtkCmsApiStoreInterface {
  tokenInfo: TokenInfoModel;
  deviceTokenInfo: TokenDeviceModel;
  isLoading: boolean;
  inProcessingList: Array<string>;
}
