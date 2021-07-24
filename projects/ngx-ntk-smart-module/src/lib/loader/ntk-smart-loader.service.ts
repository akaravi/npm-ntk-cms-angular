import { Injectable } from '@angular/core';

import { LoaderInstance } from './loader-instance';

@Injectable({
  providedIn: 'root',
})
export class NtkSmartLoaderService {
  private privateloaderStack: LoaderInstance[] = [];
  private privateActions: Array<{ identifier: string, action: string }> = [];

  /**
   * Add a new loader instance. This step is essential and allows to retrieve any loader at any time.
   * It stores an object that contains the given loader identifier and the loader itself directly in the `loaderStack`.
   *
   * @param loaderInstance The object that contains the given loader identifier and the loader itself.
   * @param force Optional parameter that forces the overriding of loader instance if it already exists.
   * @returns Returns nothing special.
   */
  public addLoader(loaderInstance: LoaderInstance, force?: boolean): void {
    if (force) {
      const i: number = this.privateloaderStack.findIndex((o: LoaderInstance) => {
        return o.id === loaderInstance.id;
      });
      if (i > -1) {
        this.privateloaderStack[i].component = loaderInstance.component;
      } else {
        this.privateloaderStack.push(loaderInstance);
      }
      return;
    }
    let loader;
    // tslint:disable-next-line: no-conditional-assignment
    if (loader = this._getLoader(loaderInstance.id)) {
      throw (new Error('Loader with ' + loaderInstance.id + ' identifier already exist'));
    } else {
      this.privateloaderStack.push(loaderInstance);
    }
  }

  /**
   * Remove a loader instance from the loader stack.
   *
   * @param id The loader identifier.
   */
  public removeLoader(id: string): void {
    this.privateloaderStack = this.privateloaderStack.filter((loader) => loader.id !== id);

    this._removeAction(id, '*');
  }

  /**
   * Retrieve all the created loaders.
   *
   * @returns Returns an array that contains all loader instances.
   */
  public getLoaderStack(): LoaderInstance[] {
    return this.privateloaderStack;
  }

  /**
   * It gives the number of loader instances. It's helpful to know if the loader stack is empty or not.
   *
   * @returns Returns the number of loader instances.
   */
  public getLoaderStackCount(): number {
    return this.privateloaderStack.length;
  }

  /**
   * Retrieve all the opened loaders. It looks for all loader instances with their `visible` property set to `true`.
   *
   * @returns Returns an array that contains all the opened loaders.
   */
  public getOpenedLoaders(): LoaderInstance[] {
    return this.privateloaderStack.filter((loader) => loader.component.visible);
  }

  /**
   * Retrieve all the active loaders. It looks for all loader instances with their `loading` property set to `true`.
   *
   * @returns Returns an array that contains all the active loaders.
   */
  public getActiveLoaders(): LoaderInstance[] {
    return this.privateloaderStack.filter((loader) => loader.component.loading);
  }

  /**
   * Get the higher `z-index` value between all the loader instances. It iterates over the `LoaderStack` array and
   * calculates a higher value (it takes the highest index value between all the loader instances and adds 1).
   * Use it to make a loader appear foreground.
   *
   * @returns Returns a higher index from all the existing loader instances.
   */
  public getHigherIndex(): number {
    const index: number[] = this.getOpenedLoaders().map((loader) => loader.component.layerPosition);

    return Math.max(...index) + 1;
  }

  /**
   * Enable loading state to one or several loaders.
   *
   * @param id The loader identifier.
   */
  public start(id: string | string[]): void {
    let loader;

    if (Array.isArray(id)) {
      id.forEach((i: string) => {
        this.start(i);
      });
    } else if (loader = this._getLoader(id)) {
      loader.component.start();
      this._removeAction(id, 'start');
    } else {
      this._addAction(id, 'start');
    }
  }

  /**
   * Enable loading state to all loaders.
   */
  public startAll(): void {
    this.privateloaderStack.forEach((loader) => this.start(loader.id));
  }

  /**
   * Disable loading state to one or several loaders.
   *
   * @param id The loader identifier.
   */
  public stop(id: string | string[]): void {
    let loader;

    if (Array.isArray(id)) {
      id.forEach((i: string) => {
        this.stop(i);
      });
    } else if (loader = this._getLoader(id)) {
      loader.component.stop();
      this._removeAction(id, 'stop');
    } else {
      this._addAction(id, 'stop');
    }
  }

  /**
   * Disable loading state to all loaders.
   */
  public stopAll(): void {
    this.privateloaderStack.forEach((loader) => this.stop(loader.id));
  }

  public isLoading(id: string | string[]): boolean {
    let loader;
    if (Array.isArray(id)) {
      const tmp: any = [];

      id.forEach((i: string) => {
        this.privateloaderStack.forEach((load) => {
          if (load.id === i) {
            tmp.push(load.component.loading);
          }
        });
      });
      return tmp.indexOf(false) === -1;
    } else if (loader = this._getLoader(id)) {
      return loader.component.loading;
    } else {
      return false;
    }
  }

  /**
   * Execute an action on loaders
   *
   * @param id The loader identifier.
   * @param action Name of the action.
   */
  public executeAction(id: string, action: string): void {
    if (this.privateActions.find((act) => act.identifier === id && act.action === action)) {
      switch (action) {
        case 'start':
          this.start(id);
          break;
        case 'stop':
          this.stop(id);
          break;
      }
    }
  }

  /**
   * Retrieve a loader instance by its identifier.
   * If there's several loaders with same identifier, the first is returned.
   *
   * @param id The loader identifier used at creation time.
   */
  private _getLoader(id: string): LoaderInstance | null {
    return this.privateloaderStack.find((load) => load.id === id) || null;
  }

  /**
   * Adds an action on one or more loaders
   *
   * @param id The loader identifier.
   * @param action Name of the action.
   */
  private _addAction(id: string | string[], action: string): void {
    if (Array.isArray(id)) {
      id.forEach((i: string) => {
        this._addAction(i, action);
      });
    } else {
      this.privateActions.push({ identifier: id, action: action });
    }
  }

  /**
   * Remove an action on one or more loaders
   *
   * @param id The loader identifier.
   * @param action Name of the action.
   */
  private _removeAction(id: string | string[], action: string): void {
    if (Array.isArray(id)) {
      id.forEach((i: string) => {
        this._removeAction(i, action);
      });
    } else {
      this.privateActions = this.privateActions.filter((act) => act.identifier !== id || (act.action !== action && action !== '*'));
    }
  }
}
