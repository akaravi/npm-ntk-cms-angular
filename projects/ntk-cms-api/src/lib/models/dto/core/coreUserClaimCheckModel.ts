export class CoreUserClaimCheckModel {
  TypeTitle: string;
  TypeDescription: string;
  LinkTypeId: number;
  LinkContentId?: number;
  IsApproved: boolean;
  ApprovedResult: string;
  ApproveCheckDate?: Date;
  ApprovedExpireDate?: Date;
}
