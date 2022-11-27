import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
import { ApplicationLayoutModel } from './applicationLayoutModel';
//@@tag-Version-2201011
export class ApplicationLayoutValueModel extends BaseModuleEntity<number>  {

    linkApplicationId?: number;
    // tslint:disable-next-line: variable-name
    virtual_Application: ApplicationAppModel;
    application: ApplicationAppModel;
    linkLayoutId?: number;
    // tslint:disable-next-line: variable-name
    virtual_Layout: ApplicationLayoutModel;
    layout: ApplicationLayoutModel;
    jsonFormValues: string;
}
