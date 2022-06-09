import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreModuleSiteAccountingDocumentDetailTypeModel } from './coreModuleSiteAccountingDocumentDetailTypeModel';
import { CoreModuleSiteAccountingDocumentModel } from './coreModuleSiteAccountingDocumentModel';
export class CoreModuleSiteAccountingDocumentDetailModel extends BaseModuleEntity<number> {
  number: string;
  description:string;
  debtor: number;
  creditor: number;
  linkCmsUserId?: number;
  linkDocumentDetailTypeId?: number;
  virtual_DocumentDetailType: CoreModuleSiteAccountingDocumentDetailTypeModel;
  documentDetailType: CoreModuleSiteAccountingDocumentDetailTypeModel;
  linkDocumentId?:number;
  virtual_Document:CoreModuleSiteAccountingDocumentModel;
  document:CoreModuleSiteAccountingDocumentModel;
  virtual_Parent:CoreModuleSiteAccountingDocumentDetailModel;
  parent:CoreModuleSiteAccountingDocumentDetailModel;
  isAccepted:boolean;
  acceptDate?:Date;
  userAcceptor?:number;
  isBankAccepted:boolean;
  bankAcceptDate:Date;
  userBankAcceptor?:number;
  cardNumber:string;
  accountNumber:string;
  documentDetails:CoreModuleSiteAccountingDocumentDetailModel[]
}
