import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class WebDesignerMainIntroModel extends BaseModuleEntity<string> {
    title: string;
    description: string;
    priority: number;
    linkMainImageId?: number;
    linkMainVideoId?: number;
    linkPageId: string;
    mainImageSrc: string;
    linkMainImageIdSrc: string;
    linkMainVideoIdSrc: string;
}
