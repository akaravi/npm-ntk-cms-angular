import { CatalogContentModel } from './catalogContentModel';
//@@tag-Version-2201011
export class CatalogContentOtherInfoModel {
  id: string;
  title: string;
  htmlBody: string;
  source: string;
  linkContentId: string;
  typeId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: CatalogContentModel;
  content: CatalogContentModel;
}
