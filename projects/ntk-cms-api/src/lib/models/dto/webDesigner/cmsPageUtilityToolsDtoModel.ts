import { CmsPageUtilityToolsActionEnum } from '../../enums/base/cmsPageUtilityToolsActionEnum';
export class CmsPageUtilityToolsDtoModel {
    action: CmsPageUtilityToolsActionEnum;
    pageId?: number;
    mainString: string;
    alternativeString: string;
}
