//@@tag-Version-2201011
/**
 * محتوای مشابه اخبار
 */
export class NewsContentSimilarModel {
  /** لینک به شناسه محتوای مبدأ */
  linkSourceId: number;
  /** لینک به شناسه محتوای مقصد */
  linkDestinationId: number;
  // tslint:disable-next-line: variable-name
  virtual_Source?: any;
  /** محتوای مبدأ */
  source?: any;
  // tslint:disable-next-line: variable-name
  virtual_Destination?: any;
  /** محتوای مقصد */
  destination?: any;
}
