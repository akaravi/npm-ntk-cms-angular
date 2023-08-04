import { EnumActionGoStep } from '../../enums/base/actionGoStepEnum';
export class EditStepDtoModel<TKey>{
  id: TKey;
  centerId: TKey;
  actionGo: EnumActionGoStep;
}
