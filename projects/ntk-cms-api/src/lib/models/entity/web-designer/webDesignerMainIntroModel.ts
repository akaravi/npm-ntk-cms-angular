import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل معرفی اصلی وب دیزاینر
 */
export class WebDesignerMainIntroModel extends BaseModuleEntity<string> {
    /** عنوان */
    title: string;
    /** توضیحات */
    description: string;
    /** اولویت */
    priority: number;
    /** لینک به شناسه تصویر اصلی */
    linkMainImageId?: number;
    /** لینک به شناسه ویدیو اصلی */
    linkMainVideoId?: number;
    /** لینک به شناسه صفحه */
    linkPageId: string;
    /** آدرس تصویر اصلی */
    mainImageSrc: string;
    /** آدرس تصویر اصلی */
    linkMainImageIdSrc: string;
    /** آدرس ویدیو اصلی */
    linkMainVideoIdSrc: string;
}
