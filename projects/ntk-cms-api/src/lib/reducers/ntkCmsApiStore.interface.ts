import { TokenInfoModel } from '../models/entity/base/tokenInfoModel';

export interface NtkCmsApiStoreInterface {
  tokenInfo: TokenInfoModel;
  isLoading: boolean;
}
