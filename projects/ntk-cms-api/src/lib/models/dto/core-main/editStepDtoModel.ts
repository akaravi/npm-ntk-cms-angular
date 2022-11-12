import { EnumActionGoStep } from '../../enums/base/enumActionGoStep';
export class EditStepDtoModel<TKey>{
  id: TKey;
  centerId: TKey;
  actionGo: EnumActionGoStep;
}
