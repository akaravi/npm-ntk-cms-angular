import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
import { ApplicationLayoutModel } from './applicationLayoutModel';
/**
 * مدل مقدار لایوت اپلیکیشن
 */
//@@tag-Version-2201011
export class ApplicationLayoutValueModel extends BaseModuleEntity<number> {
    /** لینک به شناسه اپلیکیشن */
    linkApplicationId?: number;
    // tslint:disable-next-line: variable-name
    /** اپلیکیشن (مجازی) */
    virtual_Application: ApplicationAppModel;
    /** اپلیکیشن */
    application: ApplicationAppModel;
    /** لینک به شناسه لایوت */
    linkLayoutId?: number;
    // tslint:disable-next-line: variable-name
    /** لایوت (مجازی) */
    virtual_Layout: ApplicationLayoutModel;
    /** لایوت */
    layout: ApplicationLayoutModel;
    /** مقادیر JSON فرم */
    jsonFormValues: string;
}
