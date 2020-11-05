import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';

export class ApplicationIntroModel extends BaseModuleEntity<number>  {
    title: string;
    description: string;
    priority: number;
    linkMainImageId?: number;
    linkApplicationId: number;
    application: ApplicationAppModel;
    mainImageSrc: string;
}
