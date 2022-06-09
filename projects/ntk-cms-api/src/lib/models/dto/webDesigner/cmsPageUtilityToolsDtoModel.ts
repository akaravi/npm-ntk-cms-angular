import { EnumCmsPageUtilityToolsAction } from '../../enums/enumCmsPageUtilityToolsAction';
export class CmsPageUtilityToolsDtoModel {
    action: EnumCmsPageUtilityToolsAction;
    pageId?: number;
    mainString: string;
    alternativeString: string;
}
