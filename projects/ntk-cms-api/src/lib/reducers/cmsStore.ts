// Import the core angular services.
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

export class CmsStore<TState = any> {
  private state: TState;
  private sub: Subject<TState> = new Subject<TState>();
  private stateSubject: BehaviorSubject<TState>;
  // I initialize the simple store with the givne initial state value.
  constructor(initialState: TState) {
    this.stateSubject = new BehaviorSubject(initialState);
  }

  // ---
  // PUBLIC METHODS.
  // ---

  // I get the current state as a stream (will always emit the current state value as
  // the first item in the stream).
  public getState(): Observable<TState> {
    return (this.stateSubject.pipe(distinctUntilChanged()));
  }


  // I get the current state snapshot.
  public getStateSnapshot(): TState {
    return (this.stateSubject.getValue());
  }


  // I return the given top-level state key as a stream (will always emit the current
  // key value as the first item in the stream).
  public select<K extends keyof TState>(key: K): Observable<TState[K]> {
    const selectStream = this.stateSubject.pipe(
      map(
        (state: TState) => {

          return (state[key]);

        }
      ),
      distinctUntilChanged()
    );
    return (selectStream);
  }


  // I move the store to a new state by merging the given partial state into the
  // existing state (creating a new state object).
  // --
  // CAUTION: Partial<T> does not currently project against "undefined" values. This is
  // a known type safety issue in TypeScript.
  public setState(partialState: Partial<TState>): void {

    const currentState = this.getStateSnapshot();
    const nextState = Object.assign({}, currentState, partialState);

    this.stateSubject.next(nextState);

  }

}
