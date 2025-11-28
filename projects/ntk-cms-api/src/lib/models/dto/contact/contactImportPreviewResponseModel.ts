export class ContactImportPreviewResponseModel {
  sessionId: string;
  fileType: GoogleContactFileType;
  sourceHeaders: string[] = [];
  destinationHeaders: ContactImportDestinationHeaderModel[] = [];
  rowCount: number;
  sampleRows: { [key: string]: string }[] = [];
}
export class ContactImportDestinationHeaderModel {
  key: string;
  title: string;
  required: boolean;
}

// نوع فایل
export enum GoogleContactFileType
{
    Unknown,
    GoogleCsv,
    OutlookCsv,
    VCard,
    Excel
}
