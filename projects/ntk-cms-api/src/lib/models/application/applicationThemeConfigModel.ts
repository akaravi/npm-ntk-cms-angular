import { BaseModuleEntity } from '../base/baseModuleEntity';

export class ApplicationThemeConfigModel extends BaseModuleEntity<number>  {

    title: string;
    typeId: string;
    linkMainImageId?: number;
    linkSourceId?: number;
    virtual_Source: ApplicationSourceModel;
    source: ApplicationSourceModel;
    themeConfigBuilderJsonValues: string;
    themeConfigRuntimeJsonValues: string;
    themeConfigLayoutJsonValues: string;
    themeConfigJsonValues: string;
    themeConfigLayouts: ThemeConfigLayoutModel[];
    applications: ApplicationAppModel[];

}
