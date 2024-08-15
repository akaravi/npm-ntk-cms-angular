import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { TokenDeviceModel } from '../models/entity/core-token/tokenDeviceModel';
import { TokenInfoModel } from '../models/entity/core-token/tokenInfoModel';
import { NtkCmsApiStoreInterface } from './ntkCmsApiStore.interface';
import { AppStoreModel } from './reducer.factory';

const initialState: NtkCmsApiStoreInterface = {
  isLoading: true,
  tokenInfo: new TokenInfoModel(),
  deviceTokenInfo: new TokenDeviceModel(),
  inProcessingList: []
};

@Injectable({
  providedIn: 'root',
})
export class NtkCmsApiStoreService {
  private state: AppStoreModel;
  private sub: Subject<AppStoreModel> = new Subject<AppStoreModel>();
  private stateSubject: BehaviorSubject<AppStoreModel>;
  constructor() {
    this.state = {
      ntkCmsAPiState: initialState,
    };
    this.stateSubject = new BehaviorSubject(this.state);
    // @ts-ignore
    window.getInfo = () => this.state;
  }

  setState(param: Actions): void {

    Object.assign(this.state.ntkCmsAPiState, stateReducer(this.state.ntkCmsAPiState, param));
    this.sub.next(this.state);
    this.stateSubject.next(this.state);
  }

  getState<R>(mapFn: (value: AppStoreModel, index: number) => R): Observable<R> {
    if (typeof mapFn !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return this.sub.asObservable()
      .pipe(map(mapFn))
      .pipe(distinctUntilChanged());
  }
  public getStateSnapshot(): AppStoreModel {
    return (this.stateSubject.getValue());
  }

}



// REDUCERS
export function stateReducer(state: NtkCmsApiStoreInterface = initialState, action: Actions): NtkCmsApiStoreInterface {
  switch (action.type) {
    case SET_LOADING_STATE:
      return { ...state, isLoading: action.payload };
    case SET_TOKEN_INFO:
      return { ...state, tokenInfo: action.payload };
    case SET_DEVICE_TOKEN_INFO:
      return { ...state, deviceTokenInfo: action.payload };
    case SET_IN_PROCESSING_LIST:
      return { ...state, inProcessingList: action.payload };
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
export class SetInProcessingList implements ActionInterface {
  readonly type = SET_IN_PROCESSING_LIST;
  payload: Array<string>;
}

export type Actions = SetLoadingState | SetDeviceTokenInfoState | SetTokenInfoState | SetInProcessingList;
