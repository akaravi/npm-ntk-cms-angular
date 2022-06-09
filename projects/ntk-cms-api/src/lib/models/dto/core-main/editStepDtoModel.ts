import { EnumActionGoStep } from '../../enums/enumActionGoStep';
export class EditStepDtoModel<TKey>{
  id: TKey;
  centerId: TKey;
  actionGo: EnumActionGoStep;
}
