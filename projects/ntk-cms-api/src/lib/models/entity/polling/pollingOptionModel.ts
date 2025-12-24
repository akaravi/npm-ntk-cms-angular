import { BaseModuleEntity } from '../base/baseModuleEntity';
import { PollingContentModel } from './pollingContentModel';
//@@tag-Version-2201011
/**
 * مدل گزینه نظرسنجی
 */
export class PollingOptionModel extends BaseModuleEntity<number> {
    /** متن گزینه سوال */
    option: string;
    /** جواب گزینه */
    optionAnswer: string;
    /** آیا پاسخ صحیح است */
    isCorrectAnswer: boolean;
    /** تعداد آرای این گزینه */
    numberOfVotes: number;
    /** امتیاز */
    scoreOfVotes: number;
    /** لینک به شناسه محتوای نظرسنجی */
    linkPollingContentId: number;
    /** محتوای نظرسنجی (مجازی) */
    // tslint:disable-next-line: variable-name
    virtual_PollingContent: PollingContentModel;
    /** محتوای نظرسنجی */
    pollingContent: PollingContentModel;
}
