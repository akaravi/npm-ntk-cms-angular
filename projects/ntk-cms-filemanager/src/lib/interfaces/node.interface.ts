export interface NodeInterface {
  isRoot: boolean;
  id: number;
  parentId?: number;
  CreatedDate?: Date;
  UpdatedDate?: Date;

  isFolder: boolean;
  isExpanded: boolean;
  stayOpen?: boolean;
  name: string;
  type?: string;
  size?: number;
  downloadLinksrc?: string;
  children: NodeInterface[];
}
