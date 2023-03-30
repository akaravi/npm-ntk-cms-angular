export interface NodeInterface {
  isRoot: boolean;
  id: number;
  pathToNode: string;
  pathToParent: string;
  isFolder: boolean;
  isExpanded: boolean;
  stayOpen?: boolean;
  name?: string;
  children?: any;

  extension?: string;
  size?: number;
  parentId?: number;
  createdDate?: Date;
  updatedDate?: Date;
  downloadLinksrc?: string;
  downloadThumbnailSrc?: string;
}
