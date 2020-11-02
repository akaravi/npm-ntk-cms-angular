import { BaseModuleEntity } from './baseModuleEntity';

export class BaseEntityCategory<TKey> extends BaseModuleEntity<TKey> {
  Title: string;
  LinkMainImageId: number;
  Description: string;
  FontIcon: string;
  LinkParentId: TKey;
  LinkParentIdNode: string;
  LinkMainImageSrc: string;
}
