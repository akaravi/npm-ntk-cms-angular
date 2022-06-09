import { FieldInfoModel } from './fieldInfoModel';

export class DataFieldInfoModel {
  fieldName: string;
  fieldType: string;
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
  fieldsInfo: FieldInfoModel[];
}
