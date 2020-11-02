import { BaseEntity } from './baseEntity';

export class BaseModuleEntity<TKey> extends BaseEntity<TKey> {
  LinkSiteId: number;
}
