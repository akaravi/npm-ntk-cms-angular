import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailModel } from './estatePropertyDetailModel';
import { EstatePropertyTypeModel } from './estatePropertyTypeModel';

export class EstatePropertyTypeLanduseModel extends BaseModuleEntity<string> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  contentCount: number;
  createdYearActive:boolean;
  titleCreatedYaer: string;
  titleCreatedYaerML: string;
  titleCreatedYaerResourceLanguage:  string;
  titlePartition: string;
  titlePartitionML: string;
  titlePartitionResourceLanguage:  string;
  description: string;
  iconFont: string;
  iconColor: string;
  linkMainImageId: number;
  linkMainImageIdSrc: string;
  propertyTypes: EstatePropertyTypeModel[];
  propertyDetails: EstatePropertyDetailModel[];
}
