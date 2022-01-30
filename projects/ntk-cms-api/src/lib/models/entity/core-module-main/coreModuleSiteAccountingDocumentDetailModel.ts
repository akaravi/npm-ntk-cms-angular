import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreModuleSiteAccountingDocumentDetailTypeModel } from './coreModuleSiteAccountingDocumentDetailTypeModel';
import { CoreModuleSiteAccountingDocumentModel } from './coreModuleSiteAccountingDocumentModel';
export class CoreModuleSiteAccountingDocumentDetailModel extends BaseModuleEntity<number> {
  Number: string;
  Description:string;
  Debtor: number;
  Creditor: number;
  LinkCmsUserId?: number;
  LinkDocumentDetailTypeId?: number;
  virtual_DocumentDetailType: CoreModuleSiteAccountingDocumentDetailTypeModel;
  DocumentDetailType: CoreModuleSiteAccountingDocumentDetailTypeModel;
  LinkDocumentId?:number;
  virtual_Document:CoreModuleSiteAccountingDocumentModel;
  Document:CoreModuleSiteAccountingDocumentModel;
  virtual_Parent:CoreModuleSiteAccountingDocumentDetailModel;
  Parent:CoreModuleSiteAccountingDocumentDetailModel;
  IsAccepted:boolean;
  AcceptDate?:Date;
  UserAcceptor?:number;
  IsBankAccepted:boolean;
  BankAcceptDate:Date;
  UserBankAcceptor?:number;
  CardNumber:string;
  AccountNumber:string;
  DocumentDetails:CoreModuleSiteAccountingDocumentDetailModel[]
}
