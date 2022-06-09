import { EnumRecordStatus } from '../../enums/enumRecordStatus';

export class CoreUserClaimCheckModel {
  recordStatus = EnumRecordStatus.Available;
  isApproved: boolean;
  typeTitle: string;
  typeDescription: string;
  linkTypeId: number;
  linkContentId?: number;
  approvedResult: string;
  approveCheckDate?: Date;
  approvedExpireDate?: Date;
  typeLinkMainImageId:number;
  typeLinkMainImageIdSrc:string;
  linkFileContentId:number;
  linkFileContentIdSrc:string;
}
