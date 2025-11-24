import { BaseModuleEntity } from './../base/baseModuleEntity';
import { SmsMainApiPathCompanyModel } from './smsMainApiCompanyModel';
import { SmsMainApiPathAndApiNumberModel } from './smsMainApiPathAndApiNumberModel';
import { SmsMainApiPathPermissionModel } from './smsMainApiPathPermissionModel';
import { SmsMainApiPathPriceServiceModel } from './smsMainApiPathPriceServiceModel';
import { SmsMainApiPathProcessFlowModel } from './smsMainApiPathProcessFlowModel';
import { SmsMainApiPathPublicConfigModel } from './smsMainApiPathPublicConfigModel';
import { SmsMainApiPathSupersedeModel } from './smsMainApiPathSupersedeModel';
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
  serverDeliveryCostBase: boolean;
  apiMinPathNeedToCheckIsOn: boolean;
  apiMinPathNeedToCheck: number;
  linkApiPathCompanyId: string;
  // tslint:disable-next-line: variable-name
  virtual_ApiPathCompany: SmsMainApiPathCompanyModel;
  apiPathCompany: SmsMainApiPathCompanyModel;
  apiPathCompanyCounterIsOn: boolean;
  apiAbilitySendUnicodeMessage: boolean;
  apiAbilitySendNormalMessage: boolean;
  apiAllowSupersede: boolean;
  apiAbilityUseWebservice: boolean;
  apiAbilityUseInside: boolean;
  apiAbilityRegulatorAllowToSend: string;
  apiAbilityRegulatorDenayToSend: string;
  apiAbilityLengthMinToSend: number;
  apiAbilityLengthMaxToSend: number;
  apiAbilitySendByQueue: boolean;
  apiAbilitySendByDirect: boolean;
  apiPathSupersedes: SmsMainApiPathSupersedeModel[];
  apiPathMustSupersedes: SmsMainApiPathSupersedeModel[];
  apiPathPermissions: SmsMainApiPathPermissionModel[];
  apiPathAndApiPathNumbers: SmsMainApiPathAndApiNumberModel[];
  apiPathPriceServices: SmsMainApiPathPriceServiceModel[];
  /**متغیر های ارسال */
  apiSendMessageIsOn: boolean;
  apiSendMessageAddTextFirst: string;
  apiSendMessageAddTextEnd: string;
  sendMessageAddTextFirst: string;
  sendMessageAddTextEnd: string;
  /**متغیر های ارسال */
  apiDeliveryIsOn: boolean;

  apiCreditBackIsOn: boolean;
  apiCreditBackCheckOnSend?: any;
  apiCreditBackCheckOnDelivery?: any;

  apiReceiveHookIsOn: boolean;
  apiReceiveManuallyIsOn: boolean;
  apiReceiveManuallyAddressLink: string;

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

  hookAddressReceiveMessageAPI: string;
  hookAddressReceiveMessageAPIById: string;

  hookAddressReceiveDeliveryStatusAPI: string;
  hookAddressReceiveDeliveryStatusAPIById: string;

  //ُ Status
  statusOutOfServiceMonitorApiChar: string;
  statusOutOfServiceActive: boolean;
  statusOutOfServiceExpire?: Date;

  statusNotStableMonitorApiChar: string;
  statusNotStableActive: boolean;
  statusNotStableExpire?: Date;
  statusNotStableCount: number;
  statusNotStableCountLimit: number;
  statusNotStableRunForMin: number;
  //ُ Status
}
