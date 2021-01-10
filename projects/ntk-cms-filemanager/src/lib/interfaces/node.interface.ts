export interface NodeInterface {
  isRoot: boolean;
  id: number;
  parentId?: number;
  // pathToNode: string;
  // pathToParent: string;
  isFolder: boolean;
  isExpanded: boolean;
  stayOpen?: boolean;
  name?: string;
  downloadLinksrc?: string;
  children: NodeInterface[];
}
