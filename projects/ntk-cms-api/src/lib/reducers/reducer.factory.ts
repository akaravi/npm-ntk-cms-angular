import { ProcessInfoModel } from '../models/entity/base/processInfoModel';
import { TokenDeviceModel } from '../models/entity/core-token/tokenDeviceModel';
import { TokenInfoModel } from '../models/entity/core-token/tokenInfoModel';
import { NtkCmsApiStoreInterface } from './ntkCmsApiStore.interface';

export interface AppStoreModel {
  ntkCmsAPiState: NtkCmsApiStoreInterface;
}
export const initialState: NtkCmsApiStoreInterface = {
  isLoadingStore: true,
  tokenInfoStore: new TokenInfoModel(),
  deviceTokenInfoStore: new TokenDeviceModel(),
  processInfoStore: new Map<string, ProcessInfoModel>(),
};


// REDUCERS
export function stateReducer(state: NtkCmsApiStoreInterface = initialState, action: Actions): NtkCmsApiStoreInterface {
  switch (action.type) {
    case SET_LOADING_STATE:
      return { ...state, isLoadingStore: action.payload };
    case SET_TOKEN_INFO:
      return { ...state, tokenInfoStore: action.payload };
    case SET_DEVICE_TOKEN_INFO:
      return { ...state, deviceTokenInfoStore: action.payload };
    case SET_IN_PROCESSING_LIST:
      return { ...state, processInfoStore: action.payload };
    default:
      return initialState;
  }
}


// ACTIONS
export interface ActionInterface {
  readonly type: string;
  payload?: any;
}

export const SET_LOADING_STATE = 'SET_LOADING_STATE';
export const SET_TOKEN_INFO = 'SET_TOKEN_INFO';
export const SET_DEVICE_TOKEN_INFO = 'SET_DEVICE_TOKEN_INFO';
export const SET_IN_PROCESSING_LIST = 'SET_IN_PROCESSING_LIST';


export class SetLoadingState implements ActionInterface {
  readonly type = SET_LOADING_STATE;
  payload: boolean;
}

export class SetTokenInfoState implements ActionInterface {
  readonly type = SET_TOKEN_INFO;
  payload: TokenInfoModel;
}
export class SetDeviceTokenInfoState implements ActionInterface {
  readonly type = SET_DEVICE_TOKEN_INFO;
  payload: TokenDeviceModel;
}
export class SetProcessInfoStore implements ActionInterface {
  readonly type = SET_IN_PROCESSING_LIST;
  payload: Map<string, ProcessInfoModel>;
}

export type Actions = SetLoadingState | SetDeviceTokenInfoState | SetTokenInfoState | SetProcessInfoStore;
