import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
import { ApplicationLayoutModel } from './applicationLayoutModel';

export class ApplicationLayoutValueModel extends BaseModuleEntity<number>  {

    LinkApplicationId?: number;
    // tslint:disable-next-line: variable-name
    virtual_Application: ApplicationAppModel;
    Application: ApplicationAppModel;
    LinkLayoutId?: number;
    // tslint:disable-next-line: variable-name
    virtual_Layout: ApplicationLayoutModel;
    Layout: ApplicationLayoutModel;
    JsonFormValues: string;
}
