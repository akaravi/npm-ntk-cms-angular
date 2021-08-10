import { TokenInfoModel } from '../models/entity/core-token/tokenInfoModel';

export interface NtkCmsApiStoreInterface {
  tokenInfo: TokenInfoModel;
  isLoading: boolean;
  inProcessingList: Array<string>;
}
