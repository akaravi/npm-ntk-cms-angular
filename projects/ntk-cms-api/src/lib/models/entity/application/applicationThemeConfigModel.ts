import { ThemeConfigLayoutModel } from './themeConfigLayoutModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
import { ApplicationSourceModel } from './applicationSourceModel';

export class ApplicationThemeConfigModel extends BaseModuleEntity<number>  {

    Title: string;
    TypeId: string;
    LinkMainImageId?: number;
    LinkSourceId?: number;
    // tslint:disable-next-line: variable-name
    virtual_Source: ApplicationSourceModel;
    Source: ApplicationSourceModel;
    ThemeConfigBuilderJsonValues: string;
    ThemeConfigRuntimeJsonValues: string;
    ThemeConfigLayoutJsonValues: string;
    ThemeConfigJsonValues: string;
    ThemeConfigLayouts: ThemeConfigLayoutModel[];
    applications: ApplicationAppModel[];
    LinkMainImageIdSrc: string;
}
