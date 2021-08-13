import { EnumFormSubmitedStatus } from '../../enums/enumFormSubmitedStatus';

export class FormInfoModel {
  FormTitle = '';
  FormDescription = '';
  FormAlert = '';
  FormError = '';
  FormErrorStatus = false;
  FormSubmitAllow = true;
  FormSubmitedStatus: EnumFormSubmitedStatus = EnumFormSubmitedStatus.none;
  ButtonSubmittedEnabled = true;
  viewlodingEnabled = false;
}
