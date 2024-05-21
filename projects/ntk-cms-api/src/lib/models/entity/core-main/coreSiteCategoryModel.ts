import { BaseEntity } from '../base/baseEntity';
import { CoreSiteModel } from './coreSiteModel';
//@@tag-Version-2201011
export class CoreSiteCategoryModel extends BaseEntity<number> {
    titleML: string;
    title: string;
    titleResourceLanguage: string;
    domains: string;
    description: string;
    ruleHtmlBody: string;
    sites: CoreSiteModel[];
}
