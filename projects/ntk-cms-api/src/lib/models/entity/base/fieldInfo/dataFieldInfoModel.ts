import { FieldInfoModel } from './fieldInfoModel';
//@@tag-Version-2201011
export class DataFieldInfoModel {
  fieldName: string;
  fieldTypeString: string;
  fieldTypeClass: string;
  fieldTitle: string;
  fieldDescription: string;
  fieldScriptDescription: string;
  fieldDefaultValue: string;
  fieldValue: string;
  fieldTypeFullName: string;
  accessSearchField = false;
  accessWatchField = false;
  accessEditField = false;
  accessAddField = false;
  accessExportField = false;
  fieldsInfo: FieldInfoModel[];
}
