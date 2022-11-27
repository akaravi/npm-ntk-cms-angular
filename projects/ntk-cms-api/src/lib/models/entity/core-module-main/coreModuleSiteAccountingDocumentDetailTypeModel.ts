import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreModuleSiteAccountingDocumentDetailModel } from './coreModuleSiteAccountingDocumentDetailModel';
//@@tag-Version-2201011
export class CoreModuleSiteAccountingDocumentDetailTypeModel extends BaseModuleEntity<number> {
  title: string;
  documentDetails: CoreModuleSiteAccountingDocumentDetailModel[];
}
