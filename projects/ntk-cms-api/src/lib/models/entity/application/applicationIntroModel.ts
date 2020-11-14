import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';

export class ApplicationIntroModel extends BaseModuleEntity<number>  {
    Title: string;
    Description: string;
    Priority: number;
    LinkMainImageId?: number;
    LinkApplicationId: number;
    Application: ApplicationAppModel;
    MainImageSrc: string;
    LinkMainImageIdSrc: string;
}
