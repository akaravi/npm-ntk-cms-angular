import { BaseEntity } from '../base/baseEntity';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreModuleSiteAccountingDocumentDetailModel } from './coreModuleSiteAccountingDocumentDetailModel';
import { CoreModuleTagCategoryModel } from './coreModuleTagCategoryModel';


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
