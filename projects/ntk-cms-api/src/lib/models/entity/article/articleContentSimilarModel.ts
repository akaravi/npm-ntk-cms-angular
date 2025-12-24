//@@tag-Version-2201011
/**
 * مدل محتوای مشابه مقاله
 */
export class ArticleContentSimilarModel {
  /** لینک به شناسه منبع */
  linkSourceId: number;
  /** لینک به شناسه مقصد */
  linkDestinationId: number;
  // tslint:disable-next-line: variable-name
  virtual_Source?: any;
  /** منبع */
  source?: any;
  // tslint:disable-next-line: variable-name
  virtual_Destination?: any;
  /** مقصد */
  destination?: any;
}
