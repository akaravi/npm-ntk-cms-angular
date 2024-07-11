import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { TokenDeviceModel } from '../models/entity/core-token/tokenDeviceModel';
import { TokenInfoModel } from '../models/entity/core-token/tokenInfoModel';
import { NtkCmsApiStoreInterface } from './ntkCmsApiStore.interface';
import { AppStore } from './reducer.factory';

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
  private state: AppStore;
  private sub: Subject<AppStore> = new Subject<AppStore>();
  private stateSubject: BehaviorSubject<AppStore>;

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

  getState<R>(mapFn: (value: AppStore, index: number) => R): Observable<R> {
    if (typeof mapFn !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return this.sub.asObservable()
      .pipe(map(mapFn))
      .pipe(distinctUntilChanged());
  }
  public getStateSnapshot(): AppStore {
    return (this.stateSubject.getValue());
  }
  processStart(name: string): void {
    if (this.state?.ntkCmsAPiState?.inProcessingList) {
      const index = this.state.ntkCmsAPiState.inProcessingList.indexOf(name);
      if (index < 0) {
        // console.log('processStart 1', this.state.ntkCmsAPiState.inProcessingList);
        const list = [...this.state.ntkCmsAPiState.inProcessingList];
        list.push(name);
        // console.log('processStart 2', this.state.ntkCmsAPiState.inProcessingList);
        this.setState({ type: SET_IN_PROCESSING_LIST, payload: list });
      }
    }
  }
  processInRun(name: string): boolean {
    if (this.state?.ntkCmsAPiState?.inProcessingList) {
      const index = this.state.ntkCmsAPiState.inProcessingList.indexOf(name);
      if (index >= 0)
        return true;
    }
    return false;
  }
  processStop(name: string): void {
    if (this.state?.ntkCmsAPiState?.inProcessingList) {
      const index = this.state.ntkCmsAPiState.inProcessingList.indexOf(name);
      if (index >= 0) {
        // console.log('processStop 1', this.state.ntkCmsAPiState.inProcessingList);
        const list = [...this.state.ntkCmsAPiState.inProcessingList];
        list.splice(index, 1);
        // console.log('processStop 2', this.state.ntkCmsAPiState.inProcessingList);
        this.setState({ type: SET_IN_PROCESSING_LIST, payload: list });
      }
    }
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
