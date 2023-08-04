import { EnumCmsPageUtilityToolsAction } from '../../enums/base/cmsPageUtilityToolsActionEnum';
export class CmsPageUtilityToolsDtoModel {
    action: EnumCmsPageUtilityToolsAction;
    pageId?: number;
    mainString: string;
    alternativeString: string;
}
