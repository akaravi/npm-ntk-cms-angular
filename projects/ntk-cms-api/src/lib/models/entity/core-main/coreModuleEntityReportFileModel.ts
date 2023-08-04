import { ReportFileTypeEnum } from '../../enums/core/reportFileTypeEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreModuleEntityReportFileModel extends BaseEntity<string>{
  linkModuleEntityId: number;
  reportFileType: ReportFileTypeEnum;
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  description: string;
  linkImageId?: number;
  linkImageIdSrc: string;
  linkFileId: number;
  linkFileIdSrc: string;
}
