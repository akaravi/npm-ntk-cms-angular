import { FormSubmitedStatusEnum } from '../../enums/base/formSubmitedStatusEnum';

export class FormInfoModel {
  formTitle = '';
  formDescription = '';
  submitButtonEnabled = true;
  submitResultMessage = '';
  submitResultMessageType: FormSubmitedStatusEnum = FormSubmitedStatusEnum.none;
  get submitResult(): string {
    if (this.submitResultMessageType === FormSubmitedStatusEnum.Success) {
      return 'success';
    } else if (this.submitResultMessageType === FormSubmitedStatusEnum.Error) {
      return 'error';
    } else if (
      this.submitResultMessageType === FormSubmitedStatusEnum.Warning
    ) {
      return 'warning';
    } else {
      return 'none';
    }
  }
  validationList: ValidationModel[] = [];
}
export enum ValidationStatusEnum {
  info = 0,
  Success = 1,
  Warning = 2,
  Error = 3,
}
export class ValidationModel {
  key = '';
  title = '';
  description = '';
  status = ValidationStatusEnum.Success;
  linkSrc = '';
}
