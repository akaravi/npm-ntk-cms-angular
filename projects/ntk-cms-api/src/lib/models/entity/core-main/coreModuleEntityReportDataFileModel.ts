import { ReportDataFileTypeEnum } from '../../enums/core/reportDataFileTypeEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreModuleEntityReportDataFileModel extends BaseEntity<string>{
  linkModuleEntityId: number;
  reportDataFileType:ReportDataFileTypeEnum;
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  linkImageId?: number;
  linkImageIdSrc: string;
  linkFileId: number;
  linkFileIdSrc: string;
}
