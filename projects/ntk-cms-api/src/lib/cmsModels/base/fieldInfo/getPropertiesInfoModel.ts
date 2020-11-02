import { FieldInfoModel } from './fieldInfoModel';
import { FieldInputDataSourceModel } from './fieldInputDataSourceModel';

export class GetPropertiesInfoModel extends FieldInfoModel {
  FieldDataSource: FieldInputDataSourceModel;
  FieldDataSourceExpression: string;
}
