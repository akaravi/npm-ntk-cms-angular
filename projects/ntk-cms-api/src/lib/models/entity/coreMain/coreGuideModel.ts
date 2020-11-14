import { BaseEntity } from '../base/baseEntity';


export class CoreGuideModel  extends BaseEntity<number> {
     Title: string;
    BodyFa: string;
    BodyEn: string;
    BodyAr: string;
    LinkFileIds: string;
    LinkParentId?: number;
    // tslint:disable-next-line: variable-name
    virtual_Parent: CoreGuideModel;
    Parent: CoreGuideModel;
    Children: CoreGuideModel[];
}

