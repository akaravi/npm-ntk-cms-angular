// Import the core angular services.
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

export class CmsStore<TStateModel = any> {
  private state: TStateModel;
  //private sub: Subject<TStateModel> = new Subject<TStateModel>();
  private stateSubject: BehaviorSubject<TStateModel>;
  constructor(initialState: TStateModel) {
    this.state = initialState;
    this.stateSubject = new BehaviorSubject(initialState);
    // @ts-ignore
    window.getInfo = () => this.state;
  }
  public getStateSnapshot(): TStateModel {
    return (this.stateSubject.getValue());
  }
  setState(partialState: Partial<TStateModel>): void {
    const currentState = this.getStateSnapshot();
    this.state = Object.assign({}, currentState, partialState);
    //this.sub.next(this.state);
    this.stateSubject.next(this.state);
  }
  getStateDirect(): Observable<TStateModel> {
    return (this.stateSubject.pipe(distinctUntilChanged()));
  }
  getState<R>(mapFn: (value: TStateModel, index: number) => R): Observable<R> {
    if (typeof mapFn !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return this.stateSubject.asObservable()
      .pipe(map(mapFn))
      .pipe(distinctUntilChanged());
  }
  select<K extends keyof TStateModel>(key: K): Observable<TStateModel[K]> {
    const selectStream = this.stateSubject.pipe(
      map(
        (state: TStateModel) => {
          return (state[key]);
        }
      ),
      distinctUntilChanged()
    );
    return (selectStream);
  }
}
