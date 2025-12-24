import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
/**
 * مدل معرفی اپلیکیشن
 */
//@@tag-Version-2201011
export class ApplicationIntroModel extends BaseModuleEntity<number> {
    /** عنوان */
    title: string;
    /** توضیحات */
    description: string;
    /** اولویت */
    priority: number;
    /** لینک به شناسه تصویر اصلی */
    linkMainImageId?: number;
    /** لینک به شناسه ویدئو اصلی */
    linkMainVideoId?: number;
    /** لینک به شناسه اپلیکیشن */
    linkApplicationId: number;
    /** اپلیکیشن */
    application: ApplicationAppModel;
    /** آدرس تصویر اصلی */
    linkMainImageIdSrc: string;
    /** آدرس ویدئو اصلی */
    linkMainVideoIdSrc: string;
}
