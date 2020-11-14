import { BaseEntity } from '../base/baseEntity';
import { CoreSiteModel } from './coreSiteModel';

export class CoreSiteCategoryModel extends BaseEntity<number>  {

    TitleML: string;

    Title: string;
    TitleResourceLanguage: string;
    Description: string;
    Sites: CoreSiteModel[];

}
