import {NodeInterface} from './node.interface';

export interface StateInterface {
  loadingListId?: number[];
  parentId: number;
  selectedNode: NodeInterface;
  isLoading: boolean;
}
