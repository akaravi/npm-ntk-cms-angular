import { NtkSmartLoaderComponent } from './ntk-smart-loader.component';

export class LoaderInstance {
  public id: string;
  public component: NtkSmartLoaderComponent;

  constructor(component: NtkSmartLoaderComponent) {
    this.id = component.identifier;
    this.component = component;
  }
}
