import { EnumFormSubmitedStatus } from '../../enums/base/enumFormSubmitedStatus';

export class FormInfoModel {
  formTitle = '';
  formDescription = '';
  formAlert = '';
  formError = '';
  formErrorStatus = false;
  formSubmitAllow = true;
  formSubmitedStatus: EnumFormSubmitedStatus = EnumFormSubmitedStatus.none;
  buttonSubmittedEnabled = true;
  viewlodingEnabled = false;
}
