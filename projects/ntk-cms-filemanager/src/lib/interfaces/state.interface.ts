import {NodeInterface} from './node.interface';

export interface StateInterface {
  parentId: number;
  selectedNode: NodeInterface;
  isLoading: boolean;
}
