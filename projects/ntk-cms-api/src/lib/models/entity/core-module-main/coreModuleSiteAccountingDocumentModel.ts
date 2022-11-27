import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreModuleSiteAccountingDocumentDetailModel } from './coreModuleSiteAccountingDocumentDetailModel';
//@@tag-Version-2201011
export class CoreModuleSiteAccountingDocumentModel extends BaseModuleEntity<number> {
  actionDate?: Date;
  number: string;
  description: string;
  sumDebtor: number;
  sumCreditor: number;
  sumRemaining: number;
  linkUserId?: number;
  isAutoAccept:boolean;
  documentDetails:CoreModuleSiteAccountingDocumentDetailModel[];
}
