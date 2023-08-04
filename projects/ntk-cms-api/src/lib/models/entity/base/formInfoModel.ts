import { FormSubmitedStatusEnum } from '../../enums/base/formSubmitedStatusEnum';

export class FormInfoModel {
  formTitle = '';
  formDescription = '';
  formAlert = '';
  formError = '';
  formErrorStatus = false;
  formSubmitAllow = true;
  formSubmitedStatus: FormSubmitedStatusEnum = FormSubmitedStatusEnum.none;
  buttonSubmittedEnabled = true;
  viewlodingEnabled = false;
}
