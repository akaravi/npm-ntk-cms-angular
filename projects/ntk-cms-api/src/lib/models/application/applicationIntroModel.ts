import { BaseModuleEntity } from '../base/baseModuleEntity';

export class ApplicationIntroModel extends BaseModuleEntity<number>  {
    title: string;
    description: string;
    priority: number;
    linkMainImageId?: number;
    linkApplicationId: number;
    application: ApplicationAppModel;
    mainImageSrc: string;
}
