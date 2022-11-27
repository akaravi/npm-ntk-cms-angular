import { FieldInfoModel } from './fieldInfoModel';
import { FieldInputDataSourceModel } from './fieldInputDataSourceModel';
//@@tag-Version-2201011
export class GetPropertiesInfoModel extends FieldInfoModel {
  fieldDataSource: FieldInputDataSourceModel;
  fieldDataSourceExpression: string;
}
