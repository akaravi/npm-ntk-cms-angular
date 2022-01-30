import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreModuleSiteAccountingDocumentDetailModel } from './coreModuleSiteAccountingDocumentDetailModel';

export class CoreModuleSiteAccountingDocumentDetailTypeModel extends BaseModuleEntity<number> {
  Title: string;
  DocumentDetails: CoreModuleSiteAccountingDocumentDetailModel[];
}
