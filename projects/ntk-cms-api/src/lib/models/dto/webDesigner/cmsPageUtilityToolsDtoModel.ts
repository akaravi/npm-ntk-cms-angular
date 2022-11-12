import { EnumCmsPageUtilityToolsAction } from '../../enums/base/enumCmsPageUtilityToolsAction';
export class CmsPageUtilityToolsDtoModel {
    action: EnumCmsPageUtilityToolsAction;
    pageId?: number;
    mainString: string;
    alternativeString: string;
}
