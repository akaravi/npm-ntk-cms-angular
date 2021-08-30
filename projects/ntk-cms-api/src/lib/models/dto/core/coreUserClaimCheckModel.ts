import { EnumRecordStatus } from "../../enums/enumRecordStatus";

export class CoreUserClaimCheckModel {
  RecordStatus = EnumRecordStatus.Available;
  IsApproved: boolean;
  TypeTitle: string;
  TypeDescription: string;
  LinkTypeId: number;
  LinkContentId?: number;
  ApprovedResult: string;
  ApproveCheckDate?: Date;
  ApprovedExpireDate?: Date;
}
