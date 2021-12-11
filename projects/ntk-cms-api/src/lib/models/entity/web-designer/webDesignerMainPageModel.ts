import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EnumPageAbilityType } from '../../enums/enumPageAbilityType';

export class WebDesignerMainPageModel  extends BaseModuleEntity<string> {
    LinkFavFileId?: number;
    Title: string;
    Keyword: string;
    Description: string;
    PageDependencyIsDefaultPage: boolean;
    PageDependencyIsDefaultPageLinkSiteCategoryId?: number;
    PageJsonValue: string;
    PageAbilityType: EnumPageAbilityType;
    Export1: string;
    Export2: string;
    Export3: string;
    ExportPreview: string;
    LinkPageParentGuId?: string;
    PageJsonValueDefaultByAdmin: string;
    PageJsonValueDefaultByAdminDateTimeUpdate?: string;
    HtmlValue: string;
    RenderVersion: string;
    SpecialIdendity: string;
    SpecialUrlParameter: string;
    LinkPageDependencyGuId?: string;
    LinkPageTemplateGuId?: string;
    ThumbnailImageSrc: string;
}
