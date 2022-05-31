import { BaseModuleEntity } from './../base/baseModuleEntity';
import { SmsMainApiPathCompanyModel } from './smsMainApiCompanyModel';
import { SmsMainApiPathAndApiNumberModel } from './smsMainApiPathAndApiNumberModel';
import { SmsMainApiPathPermissionModel } from './smsMainApiPathPermissionModel';
import { SmsMainApiPathPriceServiceModel } from './smsMainApiPathPriceServiceModel';
import { SmsMainApiPathProcessFlowModel } from './smsMainApiPathProcessFlowModel';
import { SmsMainApiPathPublicConfigModel } from './smsMainApiPathPublicConfigModel';
import { SmsMainApiPathSuperSederModel } from './smsMainApiPathSuperSederModel';

export class SmsMainApiPathModel extends BaseModuleEntity<string> {
  Title: string;
  Description?: any;
  ApiDefaultNumber?: any;
  ApiIdentity: number;
  ApiReceiveKey: string;
  Priority: number;
  PerriodStartWorkTime?: any;
  PerriodEndWorkTime?: any;
  ServerAbilityApiPhoneBook: boolean;
  ServerAbilityApiVoice: boolean;
  ServerConnectionPerMinute: number;
  ServerAbilityMinPack: number;
  ServerAbilityMaxPack: number;
  ApiMinPathNeedToCheckIsOn: boolean;
  ApiMinPathNeedToCheck: number;
  LinkApiPathCompanyId: string;
  // tslint:disable-next-line: variable-name
  virtual_ApiPathCompany: SmsMainApiPathCompanyModel;
  ApiPathCompany: SmsMainApiPathCompanyModel;
  ApiPathCompanyCounterIsOn: boolean;
  ApiAbilitySendUnicodeMessage: boolean;
  ApiAbilitySendNormalMessage: boolean;
  ApiAllowSuperSeder: boolean;
  ApiAbilityUseWebservice: boolean;
  ApiAbilityUseInside: boolean;
  ApiAbilityRegulatorAllowToSend: string;
  ApiAbilityRegulatorDenayToSend: string;
  ApiAbilityLengthMinToSend: number;
  ApiAbilityLengthMaxToSend: number;
  ApiPathSuperSeders: SmsMainApiPathSuperSederModel[];
  ApiPathMustSuperSeders: SmsMainApiPathSuperSederModel[];
  ApiPathPermissions: SmsMainApiPathPermissionModel[];
  ApiPathAndApiPathNumbers: SmsMainApiPathAndApiNumberModel[];
  ApiPathPriceServices: SmsMainApiPathPriceServiceModel[];
  ApiSendMessageIsOn: boolean;

  ApiDeliveryIsOn: boolean;

  ApiCreditBackIsOn: boolean;
  ApiCreditBackCheckOnSend?: any;
  ApiCreditBackCheckOnDelivery?: any;
  ApiReceiveIsOn: boolean;

  ApiInfoCreditCheckIsOn: boolean;

  ApiPhoneBookIsOn: boolean;

  ApiSendVoiceIsOn: boolean;

  ErrorTextToStandBy?: any;
  ErrorTextToDisable?: any;
  ErrorTextToStandByLastGet?: any;
  ErrorTextToStandByLastGetDate?: any;
  ErrorTextToStandByExit: number;
  ErrorTextToDisableLastGet?: any;
  ErrorTextToDisableLastGetDate?: any;


  IsPublic: boolean;
  MaxProcessFlowAmount: number;
  MinProcessFlowAmount: number;
  FixFeeProcessFlowAmount: number;
  PercentFeeProcessFlowAmount: number;
  LinkPublicConfigId: string;
  PrivateConfigJsonValues: string;
  Memo: string;
  // tslint:disable-next-line: variable-name
  virtual_PublicConfig: SmsMainApiPathPublicConfigModel;
  ProcessFlow: SmsMainApiPathProcessFlowModel[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;

  HookAddressAPI:string;
  HookAddressAPIById:string;
}
