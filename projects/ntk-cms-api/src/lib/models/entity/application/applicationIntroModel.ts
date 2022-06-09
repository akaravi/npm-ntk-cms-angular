import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';

export class ApplicationIntroModel extends BaseModuleEntity<number>  {
    title: string;
    description: string;
    priority: number;
    linkMainImageId?: number;
    linkMainVideoId?: number;
    linkApplicationId: number;
    application: ApplicationAppModel;
    linkMainImageIdSrc: string;
    linkMainVideoIdSrc: string;
}
