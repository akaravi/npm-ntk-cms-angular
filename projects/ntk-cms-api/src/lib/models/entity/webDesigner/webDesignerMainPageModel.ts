import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EnumPageAbilityType } from '../../enums/enumPageAbilityType';

export class WebDesignerMainPageModel  extends BaseModuleEntity<string> {
    LinkFavFileId?: number;
    Title: string;
    Keyword: string;
    Description: string;
    PageDependencyIsDefualtPage: boolean;
    PageJsonValue: string;
    PageAbilityType: EnumPageAbilityType;
    Export1: string;
    Export2: string;
    Export3: string;
    ExportPreview: string;
    LinkCmsPageGuId?: string;
    PageJsonValueDefualtByAdmin: string;
    PageJsonValueDefualtByAdminDateTimeUpdate?: string;
    HtmlValue: string;
    RenderVersion: string;
    SpecialIdendity: string;
    SpecialUrlParameter: string;
    LinkPageDependencyGuId?: string;
    LinkPageTemplateGuId?: string;
    ContentPageFindInDefaultSiteCategory: boolean;

}
