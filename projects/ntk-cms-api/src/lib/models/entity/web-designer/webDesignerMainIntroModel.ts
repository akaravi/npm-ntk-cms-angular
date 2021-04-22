import { BaseModuleEntity } from '../base/baseModuleEntity';

export class WebDesignerMainIntroModel  extends BaseModuleEntity<string> {
    Title: string;
    Description: string;
    Priority: number;
    LinkMainImageId?: number;
    LinkMainVideoId?: number;
    LinkPageId: string;
    MainImageSrc: string;
    LinkMainImageIdSrc: string;
    LinkMainVideoIdSrc: string;
}
