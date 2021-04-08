import { TokenInfoModel } from '../models/entity/coreToken/tokenInfoModel';

export interface NtkCmsApiStoreInterface {
  tokenInfo: TokenInfoModel;
  isLoading: boolean;
}
