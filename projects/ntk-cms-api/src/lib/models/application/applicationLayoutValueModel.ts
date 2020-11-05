import { BaseModuleEntity } from '../base/baseModuleEntity';

export class ApplicationLayoutValueModel extends BaseModuleEntity<number>  {

    linkApplicationId?: number;
    virtual_Application: ApplicationAppModel;
    application: ApplicationAppModel;
    linkLayoutId?: number;
    virtual_Layout: ApplicationLayoutModel;
    layout: ApplicationLayoutModel;
    jsonFormValues: string;
}
