import { PageAbilityTypeEnum } from '../../enums/base/pageAbilityTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل صفحه اصلی وب دیزاینر
 */
export class WebDesignerMainPageModel extends BaseModuleEntity<string> {
    /** لینک به شناسه فایل Favicon */
    linkFavFileId?: number;
    /** عنوان */
    title: string;
    /** کلمات کلیدی */
    keyword: string;
    /** توضیحات */
    description: string;
    /** آیا صفحه به عنوان صفحه پیش‌فرض ذخیره شده است */
    pageDependencyIsDefaultPage: boolean;
    /** لینک به شناسه دسته‌بندی سایت برای صفحه پیش‌فرض */
    pageDependencyIsDefaultPageLinkSiteCategoryId?: number;
    /** مقدار JSON طراحی صفحه */
    pageJsonValue: string;
    /** نوع قابلیت صفحه */
    pageAbilityType: PageAbilityTypeEnum;
    /** خروجی 1 */
    export1: string;
    /** خروجی 2 */
    export2: string;
    /** خروجی 3 */
    export3: string;
    /** خروجی پیش‌نمایش */
    exportPreview: string;
    /** لینک به شناسه والد صفحه */
    linkPageParentGuId?: string;
    /** مقدار JSON طراحی پیش‌فرض توسط ادمین */
    pageJsonValueDefaultByAdmin: string;
    /** تاریخ آخرین به‌روزرسانی مقدار JSON پیش‌فرض توسط ادمین */
    pageJsonValueDefaultByAdminDateTimeUpdate?: string;
    /** مقدار HTML طراحی */
    htmlValue: string;
    /** نسخه رندر */
    renderVersion: string;
    /** شناسه خاص */
    specialIdendity: string;
    /** پارامتر URL خاص */
    specialUrlParameter: string;
    /** لینک به شناسه وابستگی صفحه */
    linkPageDependencyGuId?: string;
    /** لینک به شناسه قالب صفحه */
    linkPageTemplateGuId?: string;
    /** آدرس تصویر بندانگشتی */
    thumbnailImageSrc: string;
    /** آدرس URL سازنده HTML */
    htmlBuilderUrl: string;
    /** آدرس URL پیش‌نمایش HTML */
    htmlPreviewUrl: string;
    /** آدرس URL پیش‌نمایش HTML توسط مستر */
    htmlPreviewByMasterUrl: string;
}
