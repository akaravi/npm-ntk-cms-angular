import { BaseEntity } from './baseEntity';
//@@tag-Version-2201011
export class BaseModuleEntity<TKey> extends BaseEntity<TKey> {
  linkSiteId: number;
}
