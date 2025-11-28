export class ContactImportApplyRequestDtoModel {
  linkCategoryId: string;
  sessionId: string;
  mappings: ContactImportMappingItem[] = [];
}
export class ContactImportMappingItem {
  destinationKey: string;
  sourceHeader: string;
}
