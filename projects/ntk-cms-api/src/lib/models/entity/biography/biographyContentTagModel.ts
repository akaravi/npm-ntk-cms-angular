//@@tag-Version-2201011
/**
 * مدل تگ محتوای زندگینامه
 */
export class BiographyContentTagModel {
  /** لینک به شناسه محتوا */
  linkContentId: number;
  /** لینک به شناسه تگ */
  linkTagId: number;
  // tslint:disable-next-line: variable-name
  virtual_ModuleContent?: any;
  /** محتوای ماژول */
  moduleContent?: any;

}
