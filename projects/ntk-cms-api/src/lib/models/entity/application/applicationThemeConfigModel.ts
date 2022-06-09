import { ThemeConfigLayoutModel } from './themeConfigLayoutModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
import { ApplicationSourceModel } from './applicationSourceModel';

export class ApplicationThemeConfigModel extends BaseModuleEntity<number>  {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  typeId: string;
  linkMainImageId?: number;
  linkSourceId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Source: ApplicationSourceModel;
  source: ApplicationSourceModel;
  themeConfigBuilderJsonValues: string;
  themeConfigRuntimeJsonValues: string;
  themeConfigLayoutJsonValues: string;
  themeConfigJsonValues: string;
  themeConfigLayouts: ThemeConfigLayoutModel[];
  applications: ApplicationAppModel[];
  linkMainImageIdSrc: string;
}
