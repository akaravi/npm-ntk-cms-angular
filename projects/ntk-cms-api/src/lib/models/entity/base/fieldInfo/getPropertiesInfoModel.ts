import { FieldInfoModel } from './fieldInfoModel';
import { FieldInputDataSourceModel } from './fieldInputDataSourceModel';

export class GetPropertiesInfoModel extends FieldInfoModel {
  fieldDataSource: FieldInputDataSourceModel;
  fieldDataSourceExpression: string;
}
