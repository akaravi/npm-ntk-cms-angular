import { GetPropertiesInfoModel } from '../base/fieldInfo/getPropertiesInfoModel';
import { BankPaymentPublicConfigModel } from './bankPaymentPublicConfigModel';


export class BankPaymentPublicConfigAliasJsonModel extends BankPaymentPublicConfigModel {
  PublicConfigJsonFormatter: GetPropertiesInfoModel[];
  PrivateConfigJsonFormatter: GetPropertiesInfoModel[];
}
