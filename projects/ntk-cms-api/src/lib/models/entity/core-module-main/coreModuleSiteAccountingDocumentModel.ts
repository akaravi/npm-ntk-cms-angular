import { BaseEntity } from '../base/baseEntity';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreModuleSiteAccountingDocumentDetailModel } from './coreModuleSiteAccountingDocumentDetailModel';
import { CoreModuleTagCategoryModel } from './coreModuleTagCategoryModel';


export class CoreModuleSiteAccountingDocumentModel extends BaseModuleEntity<number> {
  ActionDate?: Date;
  Number: string;
  Description: string;
  SumDebtor: number;
  SumCreditor: number;
  SumRemaining: number;
  LinkUserId?: number;
  IsAutoAccept:boolean;
  DocumentDetails:CoreModuleSiteAccountingDocumentDetailModel[];
}
