import { EnumActionGoStep } from '../../enums/enumActionGoStep';
export class EditStepDtoModel<TKey>{
  Id: TKey;
  CenterId: TKey;
  ActionGo: EnumActionGoStep;
}
