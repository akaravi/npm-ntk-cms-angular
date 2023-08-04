import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EnumPageAbilityType } from '../../enums/base/pageAbilityTypeEnum';
//@@tag-Version-2201011
export class WebDesignerMainPageModel extends BaseModuleEntity<string> {
    linkFavFileId?: number;
    title: string;
    keyword: string;
    description: string;
    pageDependencyIsDefaultPage: boolean;
    pageDependencyIsDefaultPageLinkSiteCategoryId?: number;
    pageJsonValue: string;
    pageAbilityType: EnumPageAbilityType;
    export1: string;
    export2: string;
    export3: string;
    exportPreview: string;
    linkPageParentGuId?: string;
    pageJsonValueDefaultByAdmin: string;
    pageJsonValueDefaultByAdminDateTimeUpdate?: string;
    htmlValue: string;
    renderVersion: string;
    specialIdendity: string;
    specialUrlParameter: string;
    linkPageDependencyGuId?: string;
    linkPageTemplateGuId?: string;
    thumbnailImageSrc: string;
}
