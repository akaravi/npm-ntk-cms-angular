import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { NtkCmsApiStoreInterface } from './ntkCmsApiStore.interface';
import { TokenInfoModel } from '../models/entity/base/tokenInfoModel';
import { AppStore } from './reducer.factory';

const initialState: NtkCmsApiStoreInterface = {
  isLoading: true,
  tokenInfo : new TokenInfoModel(),
};

@Injectable({
  providedIn: 'root',
})
export class ntkCmsApiStoreService {
  private state: AppStore;

  private sub: Subject<AppStore> = new Subject<AppStore>();

  constructor() {
    this.state = {
      ntkCmsAPiState: initialState,
    };

    // @ts-ignore
    window.getInfo = () => this.state;
  }

  setState(param: Actions): void {
    Object.assign(this.state.ntkCmsAPiState, stateReducer(this.state.ntkCmsAPiState, param));
    this.sub.next(this.state);
    // if (isDevMode()) console.warn('[FileManagerStoreService] setState', param, JSON.parse(JSON.stringify(this.state)));
  }

  getState<R>(mapFn: (value: AppStore, index: number) => R): Observable<R> {
    if (typeof mapFn !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }

    return this.sub.asObservable()
      .pipe(map(mapFn))
      .pipe(distinctUntilChanged());
  }
}


// REDUCERS
export function stateReducer(state: NtkCmsApiStoreInterface = initialState, action: Actions): NtkCmsApiStoreInterface {
  switch (action.type) {
    case SET_LOADING_STATE :
      return { ...state, isLoading: action.payload };
    case SET_TOKEN_INFO :
      return { ...state, tokenInfo: action.payload };
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


export class SetLoadingState implements ActionInterface {
  readonly type = SET_LOADING_STATE;
  payload: boolean;
}

export class SetTokenInfoState implements ActionInterface {
  readonly type = SET_TOKEN_INFO;
  payload: TokenInfoModel;
}

export type Actions = SetLoadingState | SetTokenInfoState;