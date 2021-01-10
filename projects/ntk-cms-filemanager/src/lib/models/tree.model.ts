import { NodeInterface } from '../interfaces/node.interface';
import { ConfigInterface } from '../interfaces/config.interface';

export class TreeModel {
  private _currentPath: number;
  private _nodes: NodeInterface;
  private _selectedNodeId: string;
  public config: ConfigInterface;

  constructor(config: ConfigInterface) {
    // this._currentPath = config.startingFolder; // todo implement (config.interfce.ts)
    this._currentPath = 0;
    this.config = config;

    this.nodes = {
      id: 0,
      // pathToNode: '',
      // pathToParent: '',
      isFolder: true,
      isExpanded: true,
      stayOpen: true,
      name: '...',
      children: [],
      isRoot: true,
    };
  }

  get currentPath(): number {
    return this._currentPath;
  }

  set currentPath(value: number) {
    this._currentPath = value;
  }

  get nodes(): NodeInterface {
    return this._nodes;
  }

  set nodes(value: NodeInterface) {
    this._nodes = value;
  }

  get selectedNodeId(): string {
    return this._selectedNodeId;
  }

  set selectedNodeId(value: string) {
    this._selectedNodeId = value;
  }

  // todo implement (config.interfce.ts)
  // get isCache(): boolean {
  //   return this.config.offlineMode;
  // }
  //
  // set isCache(value: boolean) {
  //   this.config.offlineMode = value;
  // }
}
