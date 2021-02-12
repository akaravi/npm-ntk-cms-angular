import { TokenInfoModel } from "../models/entity/base/tokenInfoModel";

export interface StateInterface {
  tokenInfo: TokenInfoModel;
  isLoading: boolean;
}
