import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Actions, AppStoreModel, initialState, stateReducer } from './reducer.factory';


@Injectable({
  providedIn: 'root',
})
export class NtkCmsApiStoreService {
  private state: AppStoreModel;
  //private sub: Subject<AppStoreModel> = new Subject<AppStoreModel>();
  private stateSubject: BehaviorSubject<AppStoreModel>;
  constructor() {
    this.state = {
      ntkCmsAPiState: initialState,
    };
    this.stateSubject = new BehaviorSubject(this.state);
    // @ts-ignore
    window.getInfo = () => this.state;
  }
  public getStateSnapshot(): AppStoreModel {
    return (this.stateSubject.getValue());
  }
  setState(param: Actions): void {
    Object.assign(this.state.ntkCmsAPiState, stateReducer(this.state.ntkCmsAPiState, param));
    //this.sub.next(this.state);
    this.stateSubject.next(this.state);
  }
  getState<R>(mapFn: (value: AppStoreModel, index: number) => R): Observable<R> {
    if (typeof mapFn !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return this.stateSubject.asObservable()
      .pipe(map(mapFn))
      .pipe(distinctUntilChanged());
  }
  getStateDirect(): Observable<AppStoreModel> {
    return (this.stateSubject.pipe(distinctUntilChanged()));
  }


}

