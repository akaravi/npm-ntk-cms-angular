
import { BaseModuleEntity } from './../base/baseModuleEntity';
import { SmsMainApiPathCompanyModel } from './smsMainApiCompanyModel';
import { SmsMainApiPathAndApiNumberModel } from './smsMainApiPathAndApiNumberModel';
import { SmsMainApiPathPermissionModel } from './smsMainApiPathPermissionModel';
import { SmsMainApiPathPriceServiceModel } from './smsMainApiPathPriceServiceModel';
import { SmsMainApiPathProcessFlowModel } from './smsMainApiPathProcessFlowModel';
import { SmsMainApiPathPublicConfigModel } from './smsMainApiPathPublicConfigModel';
import { SmsMainApiPathSuperSederModel } from './smsMainApiPathSuperSederModel';
//@@tag-Version-2305111
export class SmsMainApiPathModel extends BaseModuleEntity<string> {
  title: string;
  description?: any;
  //apiDefaultNumber?: any;
  apiIdentity: number;
  apiReceiveKey: string;
  priority: number;
  perriodStartWorkTime?: any;
  perriodEndWorkTime?: any;
  serverAbilityApiPhoneBook: boolean;
  serverAbilityApiVoice: boolean;
  serverConnectionPerMinute: number;
  serverAbilityMinPack: number;
  serverAbilityMaxPack: number;
  apiMinPathNeedToCheckIsOn: boolean;
  apiMinPathNeedToCheck: number;
  linkApiPathCompanyId: string;
  // tslint:disable-next-line: variable-name
  virtual_ApiPathCompany: SmsMainApiPathCompanyModel;
  apiPathCompany: SmsMainApiPathCompanyModel;
  apiPathCompanyCounterIsOn: boolean;
  apiAbilitySendUnicodeMessage: boolean;
  apiAbilitySendNormalMessage: boolean;
  apiAllowSuperSeder: boolean;
  apiAbilityUseWebservice: boolean;
  apiAbilityUseInside: boolean;
  apiAbilityRegulatorAllowToSend: string;
  apiAbilityRegulatorDenayToSend: string;
  apiAbilityLengthMinToSend: number;
  apiAbilityLengthMaxToSend: number;
  apiAbilitySendByQueue:boolean;
  apiAbilitySendByDirect:boolean;
  apiPathSuperSeders: SmsMainApiPathSuperSederModel[];
  apiPathMustSuperSeders: SmsMainApiPathSuperSederModel[];
  apiPathPermissions: SmsMainApiPathPermissionModel[];
  apiPathAndApiPathNumbers: SmsMainApiPathAndApiNumberModel[];
  apiPathPriceServices: SmsMainApiPathPriceServiceModel[];
  apiSendMessageIsOn: boolean;

  apiDeliveryIsOn: boolean;

  apiCreditBackIsOn: boolean;
  apiCreditBackCheckOnSend?: any;
  apiCreditBackCheckOnDelivery?: any;
  apiReceiveIsOn: boolean;

  apiInfoCreditCheckIsOn: boolean;

  apiPhoneBookIsOn: boolean;

  apiSendVoiceIsOn: boolean;

  errorTextToStandBy?: any;
  errorTextToDisable?: any;
  errorTextToStandByLastGet?: any;
  errorTextToStandByLastGetDate?: any;
  errorTextToStandByExit: number;
  errorTextToDisableLastGet?: any;
  errorTextToDisableLastGetDate?: any;


  isPublic: boolean;
  maxProcessFlowAmount: number;
  minProcessFlowAmount: number;
  fixFeeProcessFlowAmount: number;
  percentFeeProcessFlowAmount: number;
  linkPublicConfigId: string;
  privateConfigJsonValues: string;
  memo: string;
  // tslint:disable-next-line: variable-name
  virtual_PublicConfig: SmsMainApiPathPublicConfigModel;
  processFlow: SmsMainApiPathProcessFlowModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;

  hookAddressAPI:string;
  hookAddressAPIById:string;
  //ُ Status
  statusOutOfServiceMonitorApiChar:string;
  statusOutOfServiceActive:boolean;
  statusOutOfServiceExpire?:Date;

  statusNotStableMonitorApiChar:string;
  statusNotStableActive:boolean;
  statusNotStableExpire?:Date;
  statusNotStableCount:number;
  statusNotStableCountLimit:number;
  statusNotStableRunForMin:number;
  //ُ Status
}
