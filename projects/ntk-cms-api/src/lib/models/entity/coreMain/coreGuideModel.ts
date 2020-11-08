import { BaseEntity } from '../base/baseEntity';


export class CoreGuideModel  extends BaseEntity<number> {
     Title: string;
    bodyFa: string;
    bodyEn: string;
    bodyAr: string;
    linkFileIds: string;
    linkParentId?: number;
    // tslint:disable-next-line: variable-name
    virtual_Parent: CoreGuideModel;
    parent: CoreGuideModel;
    children: CoreGuideModel[];
}

