import { BaseEntity } from '../base/baseEntity';
import { CoreSiteModel } from './coreSiteModel';

export class CoreSiteCategoryModel extends BaseEntity<number>  {

    TitleML: string;

    title: string;
    titleResourceLanguage: string;
    description: string;
    sites: CoreSiteModel[];

}
